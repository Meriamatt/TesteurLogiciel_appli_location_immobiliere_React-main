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
          <h2>{card.title}</h2>
          <Link to={"/accomodation/" + card.id} state={{ card }}>
            <img src={card.cover} alt={card.title} />
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Card