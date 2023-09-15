import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./search.css";

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

  const handleSearch = () => {
    fetch(
      `https://portfolio-website-lkvm.onrender.com/api/search?searchquery=${searchQuery}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
        if (data.length === 0) {
          setShowNoResultsMessage(true);

          setTimeout(() => {
            setShowNoResultsMessage(false);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className="search-bar-container">
      <input
        id="search"
        type="text"
        placeholder="Enter search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="search-button">
        <button onClick={handleSearch} id="btn-search">
          Search
        </button>
      </div>
      {searchResults.length > 0 ? (
        <div className="search-results">
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <Link
                  to={`/SinglePageblog/${result.id}`}
                  className="search-result-link"
                >
                  <div className="searchTitle">{result.title}</div>
                  <div className="searchImage">
                    <img src={result.image} alt={result.title} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        showNoResultsMessage && (
          <div className="no-results-message">
            <p>No results found.</p>
          </div>
        )
      )}
    </div>
  );
};

export default SearchResults;
