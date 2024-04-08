import React from "react";
import { Link } from "react-router-dom";
import TransverseLogo from "/public/images/TRANSVERSELOGO.jpeg";
import Searchbar from "./Searchbar";

function Navbar({ isLoggedIn }) {
  return (
    <div className="navbar">
      <img src={TransverseLogo} alt="logo" className="navbar-logo" />
      <Searchbar />
      {isLoggedIn ? (
        <div className="logout-profile">
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
        </div>
      ) : (
        <div className="login-register">
          <Link to="/login">Login</Link>
          <Link to="/SignUpPage">Register</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
