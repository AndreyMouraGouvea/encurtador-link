import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu'



function Home() {

  const [link, setLink] =  useState('');

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

          <button>Gerar Link</button>


      </div>

      <Menu />

    </div>
    
  )

}



export default Home
