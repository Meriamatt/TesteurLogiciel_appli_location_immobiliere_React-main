import pinkStar from '../../assets/image_kasa/star-pink.svg';
import greyStar from '../../assets/image_kasa/star-grey.svg';
import './rating.css'

// eslint-disable-next-line react/prop-types
function Rates({ data }) {
    
    
    const stars = [];
    const rating = data.rating;

    // Ajouter les étoiles remplies en fonction de `rate`
    for (let i = 0; i < rating ; i++) {
        stars.push(<img key={i} src={pinkStar} alt="star full" className="star" />);
    }

    // Ajouter les étoiles vides pour compléter jusqu'à 5 étoiles
    for (let i = rating; i < 5; i++) {
        stars.push(<img key={i} src={greyStar} alt="star empty" className="star" />);
    }

    return (
        <div className='rating'>
            {stars}
        </div>
    );
  }
  
  export default Rates;