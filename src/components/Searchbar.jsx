import React, { useState } from "react";
// import axios from "axios";
import "./Searchbar.css";

function Searchbar() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5005/search?q=${query}`
      );
      console.log(response.data);
    } catch {
      console.error("error", error);
    }
  };
  return (
    <form onSubmit={handleSearch} className="searchbar-form">
      <input
        type="text"
        className="search-field"
        placeholder="Search "
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className="search-btn">
        <img src="/images/search_icon.png" className="search_icon" />
      </button>
    </form>
  );
}
export default Searchbar;
