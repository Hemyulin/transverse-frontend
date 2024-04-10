import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext/auth.context";
import axios from "axios";
import { API_URL } from "../config";
import "./OwnProfilePage.css";

export const OwnProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [userData, setuserData] = useState();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
          throw new Error("JWT token not found!");
        }

        if (user) {
          setuserData(user);
        } else {
          const userProfileResponse = await axios.get(
            `${API_URL}/protected/user`,
            {
              headers: { authorization: `Bearer ${token}` },
            }
          );
          setuserData(userProfileResponse.data);
        }

        const offersResponse = await axios.get(`${API_URL}/api/offers`, {
          headers: { authorization: `Bearer ${token}` },
        });

        const userOffers = offersResponse.data.offers.filter(
          (offer) => offer.host === user?._id
        );

        setOffers(userOffers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [user]);

  const handleDelete = async (offerId) => {
    try {
      const token = localStorage.getItem("jwtToken");
      await axios.delete(`${API_URL}/api/offers/${offerId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Filter out the deleted offer from the local state to update the UI
      const updatedOffers = offers.filter((offer) => offer._id !== offerId);
      setOffers(updatedOffers);
    } catch (err) {
      console.error("Failed to delete offer", err);
    }
  };

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
        {offers.map((offer) => (
          <div className="offer-card" key={offer._id}>
            <h4 key={offer.id}>{offer.title}</h4>
            <p>{offer.description}</p>
            <div className="buttons-div">
              <button onClick={() => handleDelete(offer._id)}>Delete</button>
              <button>EDIT</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
