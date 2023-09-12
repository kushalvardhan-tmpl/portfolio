import React, { useState, useEffect } from "react";
import axios from "axios";
import "./category.css";

const apiUrlCategories =
  "https://portfolio-website-lkvm.onrender.com/api/home/project-categories";

function CategoryCards() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryProjects, setCategoryProjects] = useState([]);

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
      setCategoryProjects([]);
    }
  }, [selectedCategory]);

  return (
    <div className="categories-section">
      <h2>Categories</h2>
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory(null)}>All</button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.value}
          </button>
        ))}
      </div>
      <div className="category-cards">
        {categoryProjects.map((project) => (
          <div key={project.id} className="category-card">
            <h3>{project.projectName}</h3>
            <div className="image-project">
              <img src={project.image} />
            </div>
          </div>
        ))}
        console.log({categoryProjects.id});
      </div>
    </div>
  );
}

export default CategoryCards;
