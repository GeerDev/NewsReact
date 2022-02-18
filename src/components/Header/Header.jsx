import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <nav className = "navbar">
        <div className='logo'>
            <span className='logo_text'>Aplicacion de noticias de comida</span>
        </div>
        <ul className = "list">
        <Link to="/home"><li>Home</li></Link>
        <Link to="/form"><li>Form</li></Link>
        <Link to="/list"><li>News</li></Link>
        </ul>
    </nav>
    )
  }
  
  export default Header