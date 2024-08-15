/* eslint-disable react/prop-types */
import './card.css';
import { Link } from 'react-router-dom';
//import { useState } from 'react';





function Card({ data }) {


    return (
        <div className='cards'>
          {data.map((card) => (
            <div key={card.id} className='card'>
              <h2>{card.title}</h2>
              <Link to= {"/accomodation/"+card.id}><img src={card.cover} alt={card.title} /></Link>
            </div>
          ))}
        </div>
      );

}
export default Card