import Banner from '../../component/banner/banner'
import Collapse from '../../component/collapse/collapse'
import AboutImageBanner from '../../assets/image_kasa/about_image.png'
import aboutData from '../../datas/AboutData.json'
import  './about.css';




function About(){
  
    return(
        
    
        
        
        <><Banner bannerImage={AboutImageBanner} />




        <div className='collapse'>

        {aboutData.map((collapse, index) => (

          <Collapse key= {index} collapse={collapse} />
                 
           
        ))}
      </div>
        </>
        
        
      
        
  )
}

export default About