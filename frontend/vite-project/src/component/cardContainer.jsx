//import { useEffect } from "react";
import axios from "axios";

import Card from "./card";

function CardsContainer() {
  const url = "http://localhost:8080/api/properties";
  try {
    axios.get(url).then((response) => {
      console.log(response.data);
    });
  } catch (error) {
    console.log(error.response);
  }

  return (
    <div className="card-container">
      <Card />
    </div>
  );
}
export default CardsContainer;
