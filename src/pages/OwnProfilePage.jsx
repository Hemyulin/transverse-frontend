import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext/auth.context";
import axios from "axios";
import { API_URL } from "../config";
import "./OwnProfilePage.css";
import { useNavigate } from "react-router-dom";

export const OwnProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState();
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
          throw new Error("JWT token not found!");
        }

        if (user) {
          setUserData(user);
        } else {
          const userProfileResponse = await axios.get(
            `${API_URL}/protected/user`,
            {
              headers: { authorization: `Bearer ${token}` },
            }
          );
          setUserData(userProfileResponse.data);
        }

        // Fetch all offers regardless of the user's ID
        const offersResponse = await axios.get(`${API_URL}/api/offers`, {
          headers: { authorization: `Bearer ${token}` },
        });

        setOffers(offersResponse.data.offers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [user]);

  const handleEditUser = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      // Implement logic to edit user details and send PUT request
    } catch (err) {
      console.error("Failed to edit user", err);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      await axios.delete(`${API_URL}/protected/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("User deleted!");
      localStorage.removeItem("jwtToken");
      navigate("/showcase");
    } catch (err) {
      console.error("Failed to delete user", err);
    }
  };

  const handleAddOffer = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.post(`${API_URL}/api/offers`, newOffer, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Fetch user data again to ensure it's up to date
      console.log("Fetching user data...");
      const userProfileResponse = await axios.get(`${API_URL}/protected/user`, {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log("User data fetched:", userProfileResponse.data);

      setUserData(userProfileResponse.data);

      setOffers([...offers, response.data]);
      setNewOffer({
        title: "",
        description: "",
      });
    } catch (err) {
      console.error("Failed to add offer", err);
    }
  };

  const handleEditOffer = async (offerId, updatedOffer) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.put(
        `${API_URL}/api/offers/${offerId}`,
        updatedOffer,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // Update the offer in the local state with the updated data
      const updatedOffers = offers.map((offer) =>
        offer._id === offerId ? response.data : offer
      );
      setOffers(updatedOffers);
    } catch (err) {
      console.error("Failed to edit offer", err);
    }
  };

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
              <button onClick={handleDeleteUser}>Delete user</button>
              <button onClick={handleEditUser}>Edit user</button>
            </ul>
          </div>
        </div>
        <div className="profile-details">
          <form onSubmit={handleAddOffer}>
            <input
              type="text"
              placeholder="Title"
              value={newOffer.title}
              onChange={(e) =>
                setNewOffer({ ...newOffer, title: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              value={newOffer.description}
              onChange={(e) =>
                setNewOffer({ ...newOffer, description: e.target.value })
              }
            ></textarea>
            <button type="submit">Add offer</button>
          </form>
        </div>
      </div>
      <div className="offers-div">
        {offers &&
          offers.map((offer) => (
            <div className="offer-card" key={offer._id}>
              {/* Title and description */}
              <h4>{offer.title}</h4>
              <p>{offer.description}</p>

              {/* Editable fields */}
              <input
                type="text"
                value={offer.title}
                onChange={(e) => {
                  const updatedTitle = e.target.value;
                  handleEditOffer(offer._id, { title: updatedTitle });
                }}
              />
              <textarea
                value={offer.description}
                onChange={(e) => {
                  const updatedDescription = e.target.value;
                  handleEditOffer(offer._id, {
                    description: updatedDescription,
                  });
                }}
              ></textarea>
              <p>{offer.host?._id}</p>
              <p>{offer.host?.userName}</p>
              <p>{offer.host?.email}</p>
              <div className="buttons-div">
                <button onClick={() => handleDelete(offer._id)}>Delete</button>
                <button onClick={() => handleEditOffer(offer._id)}>EDIT</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
