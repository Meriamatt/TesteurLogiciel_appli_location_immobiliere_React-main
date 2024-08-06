

import Banner from "../../component/banner/banner"
import ImageBanner from '../../assets/image_kasa/Banner.png'
//import CardsContainer from "../../component/cardContainer"
import { useState } from "react";
import Card from "../../component/card/card";


function CardsContainer() {
  const [data, setData] = useState([]);
  fetch("http://localhost:8080/api/properties")
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      
    });
 
 

  return (
    <div className="card-container">
      <Card data={data}/>
    </div>
  );
}


function Home() {
    
    return(
        
    
        
        
        <>
        <Banner bannerImage={ImageBanner} />
        <CardsContainer />
        </>
        
        
      
        
  )
}

export default Home