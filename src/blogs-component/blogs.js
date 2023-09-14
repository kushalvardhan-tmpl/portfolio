import React, { useState, useEffect } from "react";
import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
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
        <div className="blogheadingcontainer">
          <div className="blogheading">
            <h3>{users?.blog?.title}</h3>
            <div className="shareButtons">
              <button id="facebookShare">
                <Link to="https://www.facebook.com/your-page-url">
                  <img src="/assets/fb-logo.png" alt="fbLogo" /> Share on
                  Facebook
                </Link>
              </button>
              <button id="twitterShare">
                <Link to="https://twitter.com/login?lang=en">
                  <img src="/assets/twitter-logo.png" alt="tweetlogo" /> Share
                  on Twitter
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="pageContent">
          <div className="main-blog-content">
            <div id="head-blog">
              <h3>My blogs</h3>
            </div>
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
                        <div className="date-published">{blog.createdAt}</div>
                        <div className="author">
                          {blog.Author.firstName + " " + blog.Author.lastName}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rightside">
            <div id="searchbar">
              <input type="search" name="" id="search" />
              <button>search</button>
            </div>
            <div className="blog-search"></div>
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
