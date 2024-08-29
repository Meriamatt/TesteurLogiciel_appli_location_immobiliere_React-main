import "./collapse.css";
//import PropTypes from "prop-types";
import { useState } from "react";
import Vector from "../../assets/image_kasa/vectordown.svg";

// eslint-disable-next-line react/prop-types
function Collapse({ data, title }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  console.log(data);
  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
    console.log("click");
  };

  return (
    <div className="about" onClick={handleCollapseClick}>
      <div className="title">
        <h2>{title}</h2>
        <img
          className={isCollapsed ? "vector" : "vector-rotated"}
          src={Vector}
          alt="vector"
        />
      </div>
      <div className={`description ${isCollapsed ? "wrapper" : ""}`}>
          {Array.isArray(data) ? (
            // eslint-disable-next-line react/prop-types
            data.map((item, index) => <li key={index}>- {item}</li>)
          ) : (
            <p>{data}</p>
          )}
      </div>
    </div>
  );
}

export default Collapse;
