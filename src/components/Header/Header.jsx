import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'

import './Header.css';

import logo from '../../assets/Logo.png'
import { useState } from "react";

const Header = () => {

    const [open, setOpen] = useState(true)

    const handleCLick = () => {
        setOpen(!open)
    }    

    return (
        <nav className = "navbar">
        <Link to="/home">
        <div className='logo'>
            <img src={logo} alt="Logo Food News"/>
            <span className='logo_text'>Food News</span>
        </div>
        </Link>
        <div className="menu-btn">
                <FontAwesomeIcon icon={faBurger} onClick={handleCLick}/>
        </div>
        <ul className = {`${open ? "list" : "list list_active"}`}>
        <Link to="/home"><li onClick={handleCLick}>Home</li></Link>
        <Link to="/form"><li onClick={handleCLick}>Form</li></Link>
        <Link to="/list"><li onClick={handleCLick}>News</li></Link>
        </ul>
    </nav>
    )
  }
  
  export default Header