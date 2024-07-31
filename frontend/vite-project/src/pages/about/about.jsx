import Banner from '../../component/banner/banner'
import AboutImageBanner from '../../assets/image_kasa/about_image.png'
import aboutData from '../../datas/AboutData.json'
import  './about.css';




function About(){
    const handleCollapseClick = (id) => {
        const descriptionAnimation = document.querySelector(id);
        descriptionAnimation.classList.toggle('animation-active');
        descriptionAnimation.classList.remove('description-before-animation');
      };
  
    return(
        
    
        
        
        <><Banner src={AboutImageBanner} />




        <div>

        {aboutData.map((collapse) => (
          < div key={collapse.id}
          title={collapse.title}
          className="about collapse-animation"
          onClick={() => handleCollapseClick(collapse.id)} >
             <h2>{collapse.title}</h2>
             <p className='description description-before-animation'>{collapse.description}</p>
          </div>
          
           
           
        ))}
      </div>
        </>
        
        
      
        
  )
}

export default About