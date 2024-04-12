import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TransverseLogo from "/public/images/TRANSVERSELOGO.png";
import Searchbar from "./Searchbar";
import { AuthContext } from "../authContext/auth.context";
function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("Is Logged In NAVBAR:", isLoggedIn);
  return (
    <div className="navbar">
      {!isLoggedIn ? (
        <Link to="/showcase">
          <img src={TransverseLogo} alt="logo" className="navbar-logo" />
        </Link>
      ) : (
        <Link to="/user-home">
          <img src={TransverseLogo} alt="logo" className="navbar-logo" />
        </Link>
      )}
      <Searchbar />
      {isLoggedIn ? (
        <div className="logout-profile">
          <Link to="/sign-out-page">Logout</Link>
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
