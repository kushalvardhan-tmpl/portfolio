import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../myComponents/header";
import "./Singlepageblog.css";
import Footer from "../myComponents/footer";
import Comment from "../comment-component/comment";
import moment from "moment";
import Loader from "../myComponents/loader";
import PopularCategory from "./popularpost";
import PopularTags from "./populartags";
import SearchResults from "./search";
import LastTags from "./last-tags";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const SinglePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
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
            <div className="date-author">
              <div className="date">
                <img src="/assets/Vector.png" alt="date icon" />

                {moment(users?.blog?.createdAt).format("MM MMM YYYY")}
              </div>
              <div id="author-name">
                <img src="/assets/user.png" alt="user icon" />
                {users?.blog?.Author?.firstName +
                  " " +
                  users?.blog?.Author?.lastName}
              </div>
              <div id="comments-png">
                <img src="/assets/comments.png" alt="comments" />
                15 {""}
                {/* *{users?.blog?.views + ""}  */}
                comments
              </div>
              <div id="views">
                <img src="/assets/views.png" alt="views" />
                {users?.blog?.views + ""} views
              </div>
            </div>
            <div className="shareButtons">
              <button id="facebookShare">
                <Link to="https://www.facebook.com/">
                  <img src={"/assets/Vector.svg"} alt="fbLogo" /> Share on
                  Facebook
                </Link>
              </button>
              <button id="twitterShare">
                <Link to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                  <img src={"/assets/Vector (1).svg"} alt="tweetlogo" /> Share
                  on Twitter
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="pageContent">
          <div className="main-blog-content">
            {loading ? (
              <Loader />
            ) : (
              <>
                <div className="newBlog">
                  <div className="page-heading">
                    {users?.blog?.Category?.value}
                  </div>

                  <div
                    className="blog-content1"
                    dangerouslySetInnerHTML={{ __html: users?.blog?.content }}
                  />
                </div>

                <LastTags />
              </>
            )}
            <div className="changePost">
              <div id="prev-post">
                {users?.prevPost !== null && (
                  <>
                    <Link to={`/Singlepageblog/${users?.prevPost?.id}`}>
                      {" "}
                      <img src={"/assets/left.png"} alt="previous" />{" "}
                      <div id="title-new-p">Previous post</div>
                    </Link>
                    <div className="title-blog-prev">
                      {users?.prevPost?.title}{" "}
                    </div>
                    <div className="prev-Img">
                      {" "}
                      <img
                        src={users?.prevPost?.image}
                        alt="previous post image"
                      />
                    </div>{" "}
                  </>
                )}
              </div>
              <div id="next-post">
                {users?.nextPost !== null && (
                  <>
                    <div className="next-Img">
                      {" "}
                      <img src={users?.nextPost?.image} alt="next post image" />
                    </div>
                    <div className="title-post-next">
                      {users?.nextPost?.title}{" "}
                    </div>
                    <Link to={`/Singlepageblog/${users?.nextPost?.id}`}>
                      <img src={"/assets/right.png"} alt="next" />
                      <div id="title-new-n">Next post</div>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <Comment blogId={blogId} />
          </div>
          <div className="rightside">
            {/* <div id="searchbar">
              <input type="search" name="search" id="search" />
              <button>search</button>
            </div> */}
            <SearchResults />
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
              <img src={"/assets/motivational.jpg"} alt="motivational image" />
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
