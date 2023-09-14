import React, { useState } from "react";

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchQuery, "sddfsdfsdfdsfsdf");

  const handleSearch = () => {
    fetch(
      `https://portfolio-website-lkvm.onrender.com/api/search?searchquery=${searchQuery}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          
          <ul>
            {searchResults?.map((result, index) => (
              <li key={index}>{result?.id}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
