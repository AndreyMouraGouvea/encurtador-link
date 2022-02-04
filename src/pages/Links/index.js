import './links.css';
import { useState, useEffect  } from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getLinksSave, deleteLink  } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem';


function Links() {


  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false)

  useEffect (() => {
    async function getLinks() {

        const result =  await getLinksSave('@amgLink')

        if (result.length === 0) {

          console.log('Lista Vazia')

        }

        setMyLinks(result);

    }

    getLinks();

  }, [])


  function handleOpenLink( link ) {

    setData(link)
    setShowModal(true)

  }

  function handleDelete( id ) {

    deleteLink(myLinks, id)
  }

  return (

    <div className='links-container'>
    
        <div className='links-header'> 
        <Link to='/'>
          <FiArrowLeft size={38} color='#FFF'/>
        </Link>
          <h1>Meus Links</h1>
        </div>

      
            { myLinks.map( link => (
            <div key={link.id} className='links-item'>
                <button className='link' onClick={ () => handleOpenLink(link)}>
                  <FiLink size={18} color='#FFF'/>
                  {link.long_url}
                </button>
                <button className='link-delete' onClick={ () => handleDelete(link.id)}>
                  <FiTrash size={24} color='#FF5454'/>
                </button>
            </div>
            ))}

        {  showModal && (
          <LinkItem
          closeModal={ () => setShowModal(false) }
          content={data}
          
          />
          )
        
        
        }


    </div>
    
    )
  

}





export default Links
