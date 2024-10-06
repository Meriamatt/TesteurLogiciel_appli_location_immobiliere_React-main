import { useParams} from "react-router-dom";
import Carrousel from "../../component/carrousel/carrousel";
import Host from "../../component/host/host";
import Title from "../../component/title/title";
import Tags from "../../component/tags/tags";
import Rates from "../../component/rating/rating";
import Collapse from "../../component/collapse/collapse";
import "./accomodation.css";
import { useState } from "react";
//import Card from "../../component/card/card";
import { useEffect } from "react";

function Accomodation() {

 const cardId  = useParams().id;
  const [card, setData] = useState([]);
  console.log(cardId);
  useEffect(() => {
    //let isMounted = true;
    async function  getData()  {
      const response = await fetch ("http://localhost:8080/api/properties/"+cardId);
      const data = await response.json();
      
          setData(data);
          console.log(card);
          data.titleLength = data.title.length;
           
        
      }
      getData();
     }, [cardId]);
 
  if (card.length === 0) {
    return <div>Chargement en cours...</div>;
  }
  return (
    <div className="accomodation">
    <Carrousel data={card} />
    <Host data={card} />
    <Title data={card} />
    <div className="tags-rates-container">
    <Tags data={card} />
    <Rates data={card} />
    </div>
    
    <div className="collapse-container">
      <div className="first">
        <Collapse
          data={card.description}
          title="Description"
          id="description"
        />
      </div>
      <div className="second">
        <Collapse
          data={card.equipments}
          title="Equipements"
          id="equipments"
        />
      </div>
    </div>
  </div>
    
  );
}

export default Accomodation;
