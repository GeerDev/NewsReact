import { Link } from "react-router-dom";

import './Header.css';

import logo from '../../assets/Logo.png'

const Header = () => {
    return (
        <nav className = "navbar">
        <Link to="/home">
        <div className='logo'>
            <img src={logo} alt="Logo Food News"/>
            <span className='logo_text'>Food News</span>
        </div>
        </Link>
        <ul className = "list">
        <Link to="/home"><li>Home</li></Link>
        <Link to="/form"><li>Form</li></Link>
        <Link to="/list"><li>News</li></Link>
        </ul>
    </nav>
    )
  }
  
  export default Header