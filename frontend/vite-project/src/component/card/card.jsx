/* eslint-disable react/prop-types */
import './card.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";






function Card() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };
  

  return (
    <div className='cards'>
      {data.map((card) => (
        <div key={card.id} className='card'>
          
          <Link to={"/accomodation/" + card.id} state={{ card }} id='card-title'>
            <img src={card.cover} alt={card.title} />
          </Link>
          <h2>{card.title}</h2>
        </div>
      ))}
    </div>
  );
}
export default Card