/* eslint-disable react/prop-types */
import './tags.css';

// eslint-disable-next-line react/prop-types
function Tags({ data }) {
  console.log(data.titleLength)

        return (
            <div className= { data.titleLength < 25 ? "tags" : "long-title-tags"}>
              
              {data.tags.map((tag, index) => (
               <li className= "tag" key={index}>
               {tag}
             </li>
              ))}
            </div>
          );
    
    }
    
  
  export default Tags;