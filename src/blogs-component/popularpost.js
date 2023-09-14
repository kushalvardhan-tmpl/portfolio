import React, { useEffect, useState } from "react";
import "./popularpost.css";
import { Link } from "react-router-dom";
const PopularCategory = () => {
  const [popularPosts, setPopularPosts] = useState([]);
  useEffect(() => {
    const apiUrl =
      "https://portfolio-website-lkvm.onrender.com/api/blogs/popular-posts";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPopularPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="popularCategory">
      <h1>Popular Posts</h1>
      <div className="popul-post">
        {popularPosts.slice(0, 3).map((post) => (
          <>
            <Link to={`/Singlepageblog/${post?.id}`} id="posts" key={post?.id}>
              <div className="title-post"> {post?.title}</div>
              <div className="image-Popular">
                <img src={post.image} />
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
