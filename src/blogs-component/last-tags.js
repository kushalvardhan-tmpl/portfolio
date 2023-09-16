import React, { useEffect, useState } from "react";
import "./lasttag.css";
const LastTags = () => {
  const [Tags, setTags] = useState([]);
  useEffect(() => {
    const tagUrl = "https://portfolio-website-lkvm.onrender.com/api/tags";

    fetch(tagUrl)
      .then((response) => response.json())
      .then((data) => {
        setTags(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className=" page-tags">
      <h1>Tags</h1>
      <div className="pageTag">
        {Tags.map((tag) => (
          <div key={tag?.id}>
            <div className="title-post">{tag?.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastTags;
