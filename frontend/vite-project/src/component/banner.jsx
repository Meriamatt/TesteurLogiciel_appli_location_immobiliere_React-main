import bannerImage from '../assets/image_kasa/Banner.png';
import './banner.css';

function Banner() {
    return (
        <section className="banner-container">
            <img className="bannerImage" src={bannerImage} alt="banner image" />
            <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
        </section>
        
          
        
    )
  }
  export default Banner