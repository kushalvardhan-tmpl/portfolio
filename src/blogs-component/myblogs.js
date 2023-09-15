import React, { useEffect, useState } from "react";
import "./myblogs.css";
import { Link } from "react-router-dom";
import Loader from "../myComponents/loader";
import moment from "moment";

const API =
  "https://portfolio-website-lkvm.onrender.com/api/home/blogs?pageNo=1";


const MyBlogs = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.blogs.length > 0) {
        setUsers(data);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs(API);
  }, []);

  return (
    <>
      {" "}
      <div id="head-blog">
        <h3>My blogs</h3>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="blog-main-container">
          {users?.blogs?.map((blog) => (
            <div key={blog.id} className="blog-Cont-main">
              <div className="blog-posts">
                <Link to={`/Singlepageblog/${blog.id}`}>
                  <div className="blog-Image">
                    <img src={blog.image} />
                  </div>
                  <div>{users.id}</div>
                  <div className="blog-Title">{blog.title}</div>
                  <div className="blog-desc">{blog.shortDescription}</div>
                  <div className="blogcontent">{blog.content}</div>
                  <div className="dateandauthor">
                    <div className="date-published">
                      {moment(blog.createdAt).format("MM / MM / YYYY")}
                    </div>
                    <div className="author">
                      {blog.Author.firstName + " " + blog.Author.lastName}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="Loadmore">
        <Link to="/blogs">
          <button>Load more</button>
        </Link>
      </div>
    </>
  );
};
export default MyBlogs;
