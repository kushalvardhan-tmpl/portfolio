import React, { useState, useEffect } from "react";
import axios from "axios";
import "./category.css";
import { Link } from "react-router-dom";

const apiUrlCategories =
  "https://portfolio-website-lkvm.onrender.com/api/home/project-categories";

function CategoryCards() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryProjects, setCategoryProjects] = useState([]);

  console.log(selectedCategory, "selectedCategory");
  console.log(categories, "categories");

  useEffect(() => {
    axios
      .get(apiUrlCategories)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories: ", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory !== null) {
      const apiUrlProjects = `https://portfolio-website-lkvm.onrender.com/api/home/projects/${selectedCategory}`;
      axios
        .get(apiUrlProjects)
        .then((response) => {
          setCategoryProjects(response.data);
        })
        .catch((error) => {
          console.error("Error fetching projects: ", error);
        });
    } else {
      const apiUrlProjects = `https://portfolio-website-lkvm.onrender.com/api/home/projects`;
      axios
        .get(apiUrlProjects)
        .then((response) => {
          setCategoryProjects(response.data);
        })
        .catch((error) => {
          console.error("Error fetching projects: ", error);
        });
    }
  }, [selectedCategory]);

  return (
    <div className="categories-section">
      <h2>My Projects</h2>
      <div className="category-buttons">
        <button
          className={selectedCategory === null && "selected"}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={category.id === selectedCategory && "selected"}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.value}
            <img src={category.image} />
          </button>
        ))}
      </div>
      <div className="category-cards">
        {categoryProjects.map((project) => (
          <div key={project.id} className="category-card">
            <h3>{project.projectName}</h3>
            <div className="projectitle">{project.name}</div>
            <div className="image-project">
              <img src={project.image} />
            </div>
            <div className="view-button">
              <Link to={project.link}>
                <button>View Project</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCards;
