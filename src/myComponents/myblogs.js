import React from "react";
import "../stylecomponents/myblogs.css";
const MyBlogs = (props) => {
  console.log(props);
  return (
    <>
      <div className="blog-main-container">
        <div className="blog-Image">
          <img src={props.image} />
        </div>
        <div className="blog-Title">{props.title}</div>
        <div className="blog-content">{props.content}</div>
        <div className="dateandauthor">
          <div className="date-published">{props.date}</div>
          <div className="author">{props.author}</div>
        </div>
      </div>
    </>
  );
};

export default MyBlogs;
