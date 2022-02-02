import './menu.css';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Menu() {

    return (

        <div className='menu'>
            <a href="https://instagram.com/andrey_moura_gouvea" target='_new' className='social'>
                <BsInstagram color='#FFF' size={24}/>
            </a>
            <Link className='menu-item' to='/links' >
                Meus Links
            </Link>
        </div>

    )

}




export default Menu