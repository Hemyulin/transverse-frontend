import React from "react";
import { Link } from "react-router-dom";
import TransverseLogo from "/public/images/TRANSVERSELOGO.jpeg";
import Searchbar from "./Searchbar";

function Navbar({ isLoggedIn }) {
  return (
    <div className="navbar">
      <Link to="/showcase">
        <img src={TransverseLogo} alt="logo" className="navbar-logo" />
      </Link>
      <Searchbar />
      {isLoggedIn ? (
        <div className="logout-profile">
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
        </div>
      ) : (
        <div className="login-register">
          <Link to="/sign-in-page">Login</Link>
          <Link to="/register-page">Register</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
