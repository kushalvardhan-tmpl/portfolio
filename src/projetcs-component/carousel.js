import React from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";

const Carousel = ({ items }) => {
  return (
    <div className="carousel">
      {items.map((item) => (
        <div key={item.id} className="carousel-item">
          <div className="category-card">
            <h3>{item.projectName}</h3>
            <div className="image-project">
              <div className="projectitle">{item.name}</div>
              <img src={item.image} alt={item.projectName} />
              <div className="view-button">
                <Link to={item.link}>
                  <button>View Project</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
