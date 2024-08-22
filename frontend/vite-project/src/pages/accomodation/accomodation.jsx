import { useLocation } from "react-router-dom";
import Carrousel from "../../component/carrousel/carrousel";
import Host from "../../component/host/host";
import Title from "../../component/title/title";
import Tags from "../../component/tags/tags";
import Rates from "../../component/rating/rating";
import Collapse from "../../component/collapse/collapse";
import "./accomodation.css"


function Slider() {
  const location = useLocation();
  const card  = location.state.card;

  return (
    <div className="">
      <Carrousel data={card} />
      ceci est un emssage de test
      <hr></hr>
      <Host data={card} />
      <Title data={card} />
      <Tags data={card} />
      <Rates data={card} />
      
      <Collapse data={card.description} title= "Description" />

      <Collapse data={card.equipments} title= "Equipements" />
    </div>
  );
}

function Accomodation() {
  return (
    <>
      <Slider />
    </>
  );
}

export default Accomodation;
