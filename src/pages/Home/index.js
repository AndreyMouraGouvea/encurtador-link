import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import api from '../../services/api';
import { saveLink } from '../../services/storeLinks'



function Home() {

  const [link, setLink] =  useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(false);


   async function handleShortLink() {

    try {

      const response = await api.post('/shorten', {
        long_url: link
      }) 

      setData(response.data);
      setShowModal(true);
      saveLink('@amgLink', response.data)
      setLink('');

    }
    catch {

      alert("Ops! Parece que algo deu errado!");
      setLink('');

    }


    


  }

  return (

    <div className='container-home'>
    
      <div className="logo">
        <img src="/logo.png" alt="Link Logo" />
        <h1>AMG Link</h1>
        <span>Cole seu link para encurtar! 👇</span>
      </div>



      <div className="area-input"> 
          <div>
            <FiLink size={24} color='#FFF'/>
            <input type="text"
             value={link} 
             placeholder='Cole seu link aqui...'
             onChange={ (e) => setLink(e.target.value)}
             />
          </div>

          <button onClick={handleShortLink}>Gerar Link</button>


      </div>

      <Menu />


      { showModal && (
        <LinkItem 
        closeModal={ () => setShowModal(false)}
        content={data}
        />
      )}

    </div>
    
  )

}



export default Home
