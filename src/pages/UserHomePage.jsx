import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../authContext/auth.context";
import { useNavigate, Link } from "react-router-dom";

function UserHomePage() {
  const [userData, setUserData] = useState(null);
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user/data");
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
    <div>
      <h1>Welcome User</h1>
      <Link to="/profile/:userId">
        <button>Your Profile</button>
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserHomePage;
