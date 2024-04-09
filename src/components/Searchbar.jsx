import React, {useState} from 'react';

function Searchbar ({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
      setQuery(e.target.value);
    }
    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(query)
    }
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="TRANSVERSELOGO.jpg" alt="app logo"/> 
      </div>
      <div className="navbar-center">
       
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Search!" value={query} onChange={handleChange}/>
          <button type="submit">Search</button>
          </form>
      </div>
      <div className="navbar-right">
        
        <button> Register here </button>
      </div>
    </div>
  );
}