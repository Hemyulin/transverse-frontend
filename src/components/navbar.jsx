import React from "react";
import TransverseLogo from "/public/images/TRANSVERSELOGO.jpeg";

function Navbar({ isLoggedIn }) {
  return (
    <div className="navbar">
      <img src={TransverseLogo} alt="logo" className="navbar-logo" />
      <h1>TRANSVERSE</h1>
      {isLoggedIn ? (
        <div className="logout-profile">
          <a href="/logout">Logout</a>
          <a href="/profile">Profile</a>
        </div>
      ) : (
        <div className="login-register">
          <a href="/login">Login</a>
          <a href="/SignUpPage">Register</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
