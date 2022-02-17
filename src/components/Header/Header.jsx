import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className = "navbar">
        <div className='logo'>
            <span className='logo_text'>Bar Paquito</span>
        </div>
        {/* <div className='menu'>
            <span>Menu</span>
        </div> */}
        <ul className = "list">
        <Link to="/home"><li>Inicio</li></Link>
        <Link to="/form"><li>Formulario</li></Link>
        <Link to="/list"><li>Noticias</li></Link>
        </ul>
    </nav>
    )
  }
  
  export default Header