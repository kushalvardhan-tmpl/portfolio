import React, { useState, useEffect } from "react";
import Header from "../myComponents/header";
import SearchResults from "./search";
import Footer from "../myComponents/footer";
import moment from "moment";
import { Link } from "react-router-dom";
import "./myblogs.css";
import "./Singlepageblog.css";
import PopularCategory from "./popularpost";
import PopularTags from "./populartags";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const API =
  "https://portfolio-website-lkvm.onrender.com/api/home/blogs?pageNo=1";

const MyBlogs = () => {
  const [users, setUsers] = useState([]);

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
  };

  useEffect(() => {
    fetchBlogs(API);
  }, []);

  return (
    <>
      <Header />

      <div className="blogpage-single">
        <div className="myBlog-head">
          <div className="myBlog-h">
            <h3>My Blogs</h3>
          </div>
        </div>
        <div className="pageContent">
          <div className="main-blog-content">
            <div className="blog-category"></div>
            <div className="blog-main-container">
              {users?.blogs?.map((blog) => (
                <div key={blog.id} className="blog-Cont-main">
                  <div className="blog-categories"></div>
                  <div className="blog-posts">
                    <Link to={`/Singlepageblog/${blog.id}`}>
                      <div className="blog-Image">
                        <img src={blog.image} alt="Blog" />
                      </div>
                      <div>{users.id}</div>
                      <div className="blog-Title">{blog.title}</div>
                      <div className="blog-desc">{blog.shortDescription}</div>
                      <div className="blogcontent">{blog.content}</div>
                      <div className="dateandauthor">
                        <div className="author">
                          {" "}
                          By {""}
                          {blog.Author.firstName + " " + blog.Author.lastName}
                        </div>
                        <div className="date-published">
                          {moment(blog.createdAt).format("MM MMM YYYY")}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rightside">
            <SearchResults />
            <div className="popularblogs">
              {users?.blogs?.map((blog) => (
                <Link to={`/Singlepageblog/${blog.id}`} key={blog.id}></Link>
              ))}
              <PopularCategory />
            </div>
            <div className="populartags">
              <h5>
                {" "}
                <PopularTags />
              </h5>
            </div>

            <div className="iconsblog">
              <button
                onClick={() =>
                  openInNewTab("https://www.facebook.com/your-page-url")
                }
              >
                <img src="/assets/fb-logo.png" alt="facebook" />
              </button>
              <button
                onClick={() =>
                  openInNewTab("https://twitter.com/login?lang=en")
                }
              >
                <img src="/assets/twitter-logo.png" alt="twitter" />
              </button>
              <button
                onClick={() => openInNewTab("https://www.instagram.com/")}
              >
                <img src="/assets/insta-logo.png" alt="insta" />
              </button>
            </div>
            <div id="motivationalImage">
              <img src="/assets/motivational.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyBlogs;
