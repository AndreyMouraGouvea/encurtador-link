import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';



function Home() {

  const [link, setLink] =  useState('');
  const [showModal, setShowModal] = useState(false);


  function handleShortLink() {

    setShowModal(true);


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
        />
      )}

    </div>
    
  )

}



export default Home
