/* eslint-disable react/prop-types */
import './card.css';



function Card({ data }) {

    return (
        <div className='cards'>
          {data.map((card) => (
            <div key={card.id} className='card'>
              <h2>{card.title}</h2>
              <img src={card.cover} alt={card.title} />
            </div>
          ))}
        </div>
      );

}
export default Card