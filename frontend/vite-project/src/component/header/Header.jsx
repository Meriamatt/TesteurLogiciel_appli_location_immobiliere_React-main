import { Link } from 'react-router-dom';
import logo from '../../assets/image_kasa/logo.png';
import './header.css';

function Header() {
    return (
      <header className="header">
       
        <img className="logo" src={logo} alt="Logo Kasa" />
        
        <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>

        </nav>
      </header>
    )
  }
  export default Header