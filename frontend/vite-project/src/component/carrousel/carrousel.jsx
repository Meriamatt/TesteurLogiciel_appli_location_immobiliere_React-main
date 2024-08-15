/* eslint-disable react/prop-types */
import { useState } from "react";
import {useParams } from "react-router-dom" 
import chevronLeft from "../../assets/image_kasa/chevron-left-solid.svg"
import chevronRight from "../../assets/image_kasa/chevron-right-solid.svg"
import './carrousel.css'



function Carrousel({ data }) {
    const { id } = useParams();
    const currentSlide = data.find(slide => slide.id === id);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour aller à l'image suivante
    const nextImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % currentSlide.pictures.length
        );
    };

    // Fonction pour aller à l'image précédente
    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + currentSlide.pictures.length) % currentSlide.pictures.length
        );
    };

    if (!currentSlide || currentSlide.pictures.length === 0) {
        return <div>No pictures available</div>;
    }

    return (
        <div className='carrousel'>
            <div className='carrousel-container'>
                <div>
                    <img 
                    className='carrousel-image'
                        src={currentSlide.pictures[currentIndex]} 
                        alt={currentSlide.title} 
                    />
                </div>
            </div>
            {currentSlide.pictures.length > 1 && (
                <>
                    <img 
                     className='chevron-left'
                    onClick={prevImage} 
                    src = {chevronLeft}
                     />
                    <img 
                    className='chevron-right'
                    onClick={nextImage} src ={chevronRight}
                    />
                </>
            )}
        </div>
    );
}


 


export default Carrousel;