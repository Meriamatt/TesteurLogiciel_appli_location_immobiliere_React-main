
import logoFooter from '../assets/image_kasa/logo_footer.png';
import './footer.css';

function Footer() {
    return (
      <footer className="footer">
        <img className="logoFooter" src={logoFooter} alt="Logo footer" />
        <p className="footer-txt">© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }

export default Footer