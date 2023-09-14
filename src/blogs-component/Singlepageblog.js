import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../myComponents/header";
import "./Singlepageblog.css";
import Footer from "../myComponents/footer";
import Comment from "../comment-component/comment";

import PopularCategory from "./popularpost";
import PopularTags from "./populartags";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const SinglePage = () => {
  const [users, setUsers] = useState([]);
  const { blogId } = useParams();

  const API = `https://portfolio-website-lkvm.onrender.com/api/blogs/${blogId}`;

  const fetchBlogs = async (url) => {
    try {
      const response = await fetch(url).then((res) => res.json());

      if (response) {
        setUsers(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs(API);
  }, [blogId]);

  return (
    <>
      <Header />
      <div className="blogpage-single">
        <div className="blogheadingcontainer">
          <div className="blogheading">
            <h3>{users?.blog?.title}</h3>
            <div className="shareButtons">
              <button id="facebookShare">
                <img src={"/assets/fb-logo.png"} alt="fbLogo" /> Share on
                Facebook
              </button>
              <button id="twitterShare">
                <img src={"/assets/twitter-logo.png"} alt="tweetlogo" /> Share
                on Twitter
              </button>
            </div>
          </div>
        </div>
        <div className="pageContent">
          <div className="main-blog-content">
            <div className="newBlog">
              <div className="page-heading">{users?.blog?.Category?.value}</div>
              <div
                className="blog-content1"
                dangerouslySetInnerHTML={{ __html: users?.blog?.content }}
              />
            </div>
            <div className="changePost">
              {users?.prevPost !== null && (
                <>
                  <Link to={`/Singlepageblog/${users?.prevPost?.id}`}>
                    <img src={"/assets/left.png"} alt="previous" /> Prev Post
                  </Link>
                  <div className="prev-Img">
                    {" "}
                    <img src={users?.prevPost?.image} />
                  </div>
                </>
              )}
              {users?.nextPost !== null && (
                <>
                  <div className="next-Img">
                    <img src={users?.nextPost?.image} />
                  </div>
                  <Link to={`/Singlepageblog/${users?.nextPost?.id}`}>
                    Next Post
                    <img src={"/assets/right.png"} alt="next" />
                  </Link>
                </>
              )}
            </div>
            <Comment />
          </div>
          <div className="rightside">
            <div id="searchbar">
              <input type="search" name="search" id="search" />
              <button>search</button>
            </div>
            <div className="popularblogs">
              {users?.blogs?.map((blog) => (
                <Link to={`/Singlepageblog/${blog?.id}`} key={blog?.id}></Link>
              ))}
              <PopularCategory />
            </div>
            <div className="populartags">
              <PopularTags />
            </div>

            <div className="iconsblog">
              <button
                onClick={() =>
                  openInNewTab("https://www.facebook.com/your-page-url")
                }
              >
                <img src={"/assets/fb-logo.png"} alt="facebook" />
              </button>
              <button
                onClick={() =>
                  openInNewTab("https://twitter.com/login?lang=en")
                }
              >
                <img src={"/assets/twitter-logo.png"} alt="twitter" />
              </button>
              <button
                onClick={() => openInNewTab("https://www.instagram.com/")}
              >
                <img src={"/assets/insta-logo.png"} alt="insta" />
              </button>
            </div>
            <div id="motivationalImage">
              <img src={"/assets/motivational.jpg"} alt="" />
            </div>
          </div>
        </div>
        <div className="changepostcontainer"></div>
      </div>

      <Footer />
    </>
  );
};

export default SinglePage;
