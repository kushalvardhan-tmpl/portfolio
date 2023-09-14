import React, { useEffect, useState } from "react";
const PopularTags = () => {
  const [popularTags, setPopularTags] = useState([]);
  useEffect(() => {
    const tagUrl = "https://portfolio-website-lkvm.onrender.com/api/tags";

    fetch(tagUrl)
      .then((response) => response.json())
      .then((data) => {
        setPopularTags(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="Tags">
      <h1>Tags</h1>
      <div className="popul-Tag">
        {popularTags.map((tag) => (
          <div key={tag?.id}>
            <div className="title-post">{tag?.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
