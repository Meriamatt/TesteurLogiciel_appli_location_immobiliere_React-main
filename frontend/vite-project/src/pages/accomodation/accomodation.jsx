import { useLocation } from "react-router-dom";
import Carrousel from "../../component/carrousel/carrousel";
import Host from "../../component/host/host";

//import {useNavigate, useParams } from "react-router-dom"

function Slider() {
  const location = useLocation();
  const card  = location.state.card;

  return (
    <div className="">
      <Carrousel data={card} />
      ceci est un emssage de test
      <hr></hr>
      <Host data={card} />
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
