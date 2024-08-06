
import './collapse.css'
import PropTypes from 'prop-types';
import  { useState} from 'react';
import Vector from '../../assets/image_kasa/vectordown.svg'


    function Collapse({ collapse }) {
        const [isCollapsed, setIsCollapsed] = useState(false);
        
      
        const handleCollapseClick = () => {
          setIsCollapsed(!isCollapsed);
        };

        return (
          <div
            key={collapse.id}
            title={collapse.title}
            className="about"
            id={collapse.id}
            onClick={handleCollapseClick}
          >
            <div className="title">
            <h2>{collapse.title}</h2>
            <img
					className={isCollapsed ? "vector" : "vector-rotated"}
					src={Vector}
					alt="vector"
				/>
            </div>
           
            <div id={`description-${collapse.id}`} className={`description ${isCollapsed ? 'wrapper' : ''}`}>
              <ul id="list">
                <li>{collapse.description}</li>
              </ul>
            </div>
          </div>
        );
      }
  Collapse.propTypes = {
    collapse: PropTypes.object,

  }
  export default Collapse