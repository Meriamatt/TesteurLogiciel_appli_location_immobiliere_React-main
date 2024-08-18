/* eslint-disable react/prop-types */
import {useParams } from "react-router-dom" 





function Host({data}) {
    const { id } = useParams();
    const currentHost = data.find(slide => slide.id === id);

    return (
        <div className='carrousel'>
            <div className='carrousel-container'>
                <div>
                    <p>{currentHost.host.name}</p>
                    <img 
                    className='carrousel-image'
                        src={currentHost.host.picture} 
                        alt={currentHost.host.name} 
                    />
                </div>
            </div>
        </div>
    );
}


 


export default Host;