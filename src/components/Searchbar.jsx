import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";

function Searchbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };
  const handleNavigate = () => {
    navigate("/offers-list-page");
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5005/search?q=${query}`
      );
      console.log(response.data);
    } catch {}
  };
  return (
    <form onSubmit={handleSearch} className="searchbar-form">
      <input
        type="text"
        className="search-field"
        placeholder="Search "
        // value={query}
        // onChange={handleChange}
      />
      <button type="submit" className="search-btn" onClick={handleNavigate}>
        <img src="/images/search_icon.png" className="search_icon" />
      </button>
    </form>
  );
}
export default Searchbar;
