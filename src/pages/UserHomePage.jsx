import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../authContext/auth.context";
import { useNavigate, Link } from "react-router-dom";
import "./UserHomePage.css";
// import ImageCarousel from "../components/Carousel";
import { API_URL } from "../config";
import { OffersListPage } from "./OffersListPage";

function UserHomePage() {
  const [userData, setUserData] = useState(null);
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
          console.error("JWT token not found!");
          return;
        }

        const response = await axios.get(`${API_URL}/protected/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error finding data", error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    logOutUser();
    navigate("/showcase");
  };

  return (
    <div className="user-home">
      <h1>Welcome to Transverse</h1>

      <div className="carousel">
        <OffersListPage />
        {/* <ImageCarousel /> */}
      </div>
      <Link to="/profile">
        <button>Your Profile</button>
      </Link>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserHomePage;
