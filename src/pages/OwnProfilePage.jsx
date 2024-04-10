import { useParams } from "react-router-dom";
import "./OwnProfilePage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const OwnProfilePage = () => {
  const { userId } = useParams();
  const [data, setData] = useState();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
          throw new Error("JWT token not found!");
        }

        const response = await axios.get(
          `${API_URL}/protected/user/${userId}`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );

        console.log("ROFL");

        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserProfile();
  }, [userId]);

  console.log("TEST", data);

  return (
    <div className="own-profile-page">
      <div className="profile-details-card">
        <div className="img-and-name">
          <div className="profile-img-div">IMG</div>
          <h4>{data ? data.userName : "Loading..."}</h4>
        </div>
        <div className="profile-info">
          <ul>
            <li>Name</li>
            <li>Hobbies</li>
            <li>Languages</li>
          </ul>
        </div>
      </div>
      <div>dfsghmj</div>
    </div>
  );
};
