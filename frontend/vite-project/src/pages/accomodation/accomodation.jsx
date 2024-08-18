
import Carrousel from '../../component/carrousel/carrousel'
import Host from '../../component/host/host'

import { useState } from "react";
//import {useNavigate, useParams } from "react-router-dom" 






function Slider() {
  const [dataSlide, setData] = useState([]);
  fetch("http://localhost:8080/api/properties")
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      
    });

  return (
    <div className="">
      <Carrousel data={dataSlide} />
      ceci est un emssage de test 
      <hr></hr>
      <Host data={dataSlide} />
    </div>
  );
}



function Accomodation() {
    
    return(
        
    
        
        
        <>
        <Slider />
        </>
        
        
      
        
  )
}

export default Accomodation