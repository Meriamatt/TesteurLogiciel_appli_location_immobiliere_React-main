
import './collapse.css'
import PropTypes from 'prop-types';
import  { useState} from 'react';


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
            <h2>{collapse.title}</h2>
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