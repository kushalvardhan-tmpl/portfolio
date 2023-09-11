import React from "react";
import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
import { Link } from "react-router-dom";
// import MyBlogs from "../myComponents/blogsLists";
// import data from "../data";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};
const Blogs = () => {
  return (
    <div>
      <Header />
      <div className="blogheadingcontainer">
        <div className="blogheading">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className="shareButtons">
            <button id="facebookShare">
              <img src={"/assets/fb-logo.png"} alt="fbLogo" /> Share on Facebook
            </button>
            <button id="twitterShare">
              <img src={"/assets/twitter-logo.png"} alt="tweetlogo" /> Share on
              Twitter
            </button>
          </div>
        </div>
      </div>
      <div className="pageContent">
        <div className="blogs-container"></div>
        <div className="rightside">
          <div id="searchbar">
            <input type="search" name="" id="search" />
            <button>search</button>
          </div>
          <div className="popularblogs">
            <h5>Popular Posts</h5>
          </div>
          <div className="populartags">
            <h5>Tags</h5>
          </div>
          <div className="popularCategory">
            <h5>Categories</h5>
          </div>
          <div className="icons">
            <button
              onClick={() =>
                openInNewTab("https://www.facebook.com/your-page-url")
              }
            >
              <img src={"/assets/fb-logo.png"} alt="facebook" />
            </button>
            <button
              onClick={() => openInNewTab("https://twitter.com/login?lang=en")}
            >
              <img src={"/assets/twitter-logo.png"} alt="twitter" />
            </button>
            <button onClick={() => openInNewTab("https://www.instagram.com/")}>
              <img src={"/assets/insta-logo.png"} alt="insta" />
            </button>
          </div>
          <div id="motivationalImage">
            <img src={"/assets/motivational.jpg"} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
