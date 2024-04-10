import { useParams } from "react-router-dom";
import "./OwnProfilePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

export const OwnProfilePage = () => {
  const { userId } = useParams();
  const [userData, setuserData] = useState();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
          throw new Error("JWT token not found!");
        }

        const userProfileResponse = await axios.get(
          `${API_URL}/protected/user/${userId}`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );

        setuserData(userProfileResponse.data);

        const offersResponse = await axios.get(`${API_URL}/api/offers`);

        console.log(offersResponse.data.offers);

        if (offersResponse.data.offers.host === userId) {
          console.log("YES");
        }
        setOffers(offersResponse.data.offers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div className="own-profile-page">
      <div className="top-info-div">
        <div className="profile-details-card">
          <div className="img-and-name">
            <div className="profile-img-div">IMG</div>
            <h4>{userData ? userData.userName : "Loading..."}</h4>
          </div>
          <div className="profile-info">
            <ul>
              <li>{userData ? userData.email : "Loading..."}</li>
              <li>Hobbies</li>
              <li>Languages</li>
            </ul>
          </div>
        </div>
        <h2 className="profile-details">dfsghmj</h2>
      </div>
      <div className="offers-div">
        {/* Map through the offers array and render each offer */}
        {offers.map((offer) => (
          <div className="offer-card">
            <h4 key={offer.id}>{offer.title}</h4>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
      <div>MORE INFO DIV</div>
    </div>
  );
};
