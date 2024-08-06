
import './banner.css';

// eslint-disable-next-line react/prop-types
function Banner({bannerImage}) {
    return (
        <section className="banner-container">
            <img className="bannerImage" src={bannerImage} alt="banner image" />
            <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
        </section>
        
          
        
    )
  }
  export default Banner