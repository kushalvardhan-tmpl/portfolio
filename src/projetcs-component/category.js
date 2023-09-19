import React, { useState, useEffect } from "react";
import axios from "axios";
import "./category.css";
import { Link } from "react-router-dom";
import Loader from "../myComponents/loader";
import Carousel from "./carousel";

const apiUrlCategories =
  "https://portfolio-website-lkvm.onrender.com/api/home/project-categories";

function CategoryCards() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryProjects, setCategoryProjects] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrlCategories)
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories: ", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let apiUrlProjects;
    if (selectedCategory !== null) {
      apiUrlProjects = `https://portfolio-website-lkvm.onrender.com/api/home/projects/${selectedCategory}`;
    } else {
      apiUrlProjects =
        "https://portfolio-website-lkvm.onrender.com/api/home/projects";
    }

    axios
      .get(apiUrlProjects)
      .then((response) => {
        setCategoryProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects: ", error);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="categories-section">
      <h2>My Projects</h2>
      <div className="category-buttons">
        <button
          className={selectedCategory === null ? "selected" : ""}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={category.id === selectedCategory ? "selected" : ""}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.value}
            {/* <img src={category.image} alt={category.value} /> */}
          </button>
        ))}
      </div>

      <div className="carousel-container">
        <Carousel items={categoryProjects} />
      </div>

      <div className="category-cards">
        {categoryProjects.map((project) => (
          <div className="category-card" key={project.id}>
            <h3>{project.projectName}</h3>
            <div className="image-project">
              <div className="projectitle">{project.name}</div>
              <img src={project.image} alt={project.projectName} />
              <div className="view-button">
                <Link to={project.link}>
                  <button>View Project</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCards;
