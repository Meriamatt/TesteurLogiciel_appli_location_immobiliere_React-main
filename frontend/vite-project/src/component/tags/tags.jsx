/* eslint-disable react/prop-types */
import './tags.css';

// eslint-disable-next-line react/prop-types
function Tags({ data }) {

        return (
            <div className='tags'>
              
              {data.tags.map((tag, index) => (
               <li className="tag" key={index}>
               {tag}
             </li>
              ))}
            </div>
          );
    
    }
    
  
  export default Tags;