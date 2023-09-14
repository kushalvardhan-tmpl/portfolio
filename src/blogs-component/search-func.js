import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../myComponents/header";
import "./Singlepageblog.css";
import Footer from "../myComponents/footer";
// import { Comment } from "../comment-component/comment";
// import PopularCategory from "./popularpost";
// import PopularTags from "./populartags";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const SinglePage = () => {
  const [users, setUsers] = useState([]);
  const { blogId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const fetchSearchResults = async () => {
    const searchURL = `https://portfolio-website-lkvm.onrender.com/api/search?searchquery=${searchQuery}`;

    try {
      const response = await fetch(searchURL).then((res) => res.json());

      if (response) {
        setSearchResults(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchClick = () => {
    fetchSearchResults();
  };

  useEffect(() => {
    fetchBlogs(API);
  }, [blogId]);

  return (
    <>
      <Header />
      <div className="blogpage-single">
        <div id="searchbar">
          <input
            type="search"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
