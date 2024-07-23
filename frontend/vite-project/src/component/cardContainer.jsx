//import { useEffect } from "react";
//import axios from "axios";
import { useState } from "react";

import Card from "./card";




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
export default CardsContainer;
