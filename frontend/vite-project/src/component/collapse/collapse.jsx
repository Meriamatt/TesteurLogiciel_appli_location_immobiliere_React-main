import "./collapse.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Vector from "../../assets/image_kasa/vectordown.svg";

// eslint-disable-next-line react/prop-types
function Collapse({ data, title }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  console.log(data);
  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
  };
 /* if (collapse) {
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

        <div
          id={`description-${collapse.id}`}
          className={`description ${isCollapsed ? "wrapper" : ""}`}
        >
          <ul id="list">
            <li>{collapse.description}</li>
          </ul>
        </div>
      </div>
    );
  }
*/
  return (
    <div  className="about" onClick={handleCollapseClick}>
      <div className="title">
          <h2>{title}</h2>
          <img
            className={isCollapsed ? "vector" : "vector-rotated"}
            src={Vector}
            alt="vector"
          />
        </div>
      <div className={`description ${isCollapsed ? "wrapper" : ""}`}>
        <ul id="list">
          {Array.isArray(data) ? (
            data.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>{data}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Collapse;
