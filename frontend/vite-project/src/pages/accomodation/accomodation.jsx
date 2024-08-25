import { useLocation } from "react-router-dom";
import Carrousel from "../../component/carrousel/carrousel";
import Host from "../../component/host/host";
import Title from "../../component/title/title";
import Tags from "../../component/tags/tags";
import Rates from "../../component/rating/rating";
import Collapse from "../../component/collapse/collapse";
import "./accomodation.css"
import { useState } from "react";
import Card from "../../component/card/card";
import { useEffect } from "react";
function Slider() {
  const location = useLocation();
  const card  = location.state.card;

  return (
    <div className="">
      <Carrousel data={card} />
      <Host data={card} />
      <Title data={card} />
      <Tags data={card} />
      <Rates data={card} />
      
      <Collapse data={card.description} title= "Description" />

      <Collapse data={card.equipments} title= "Equipements" />
    </div>
  );
}
     // <Slider />

function Accomodation() {
  /*const location = useLocation();
  const card  = location.state.card;
 console.log(card);
  const [data, setData] = useState([]);
  useEffect(() => {
    //let isMounted = true;
    fetch("http://localhost:8080/api/properties"+card.id)
      .then((res) => res.json())
      .then((json) => {
        if (isMounted) setData(json);
      });
     });*/
  return (
    <>
   <Slider />
    </>
  );
}


export default Accomodation;
