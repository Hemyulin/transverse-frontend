import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext/auth.context";
import axios from "axios";
import { API_URL } from "../config";
import "./OwnProfilePage.css";
import { useNavigate } from "react-router-dom";

export const OwnProfilePage = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [userData, setUserData] = useState();
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    title: "",
    description: "",
  });
  const [newName, setNewName] = useState("");

  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      console.log("JWT token not found!");
      navigate("/sign-in");
      return;
    }
    const userProfileResponse = await axios.get(`${API_URL}/protected/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUserData(userProfileResponse.data);
  };

  const fetchOffers = async () => {
    const token = localStorage.getItem("jwtToken");
    const offersResponse = await axios.get(`${API_URL}/api/offers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setOffers(offersResponse.data.offers);
  };

  useEffect(() => {
    fetchUserProfile();
    fetchOffers();
  }, [user]);

  const handleAddOffer = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");
    try {
      const response = await axios.post(`${API_URL}/api/offers`, newOffer, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewOffer({ title: "", description: "" });
      await fetchOffers();
      await fetchUserProfile();
    } catch (err) {
      console.error("Failed to add offer", err);
    }
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.put(
        `${API_URL}/protected/user-update`,
        { userName: newName },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("User name updated!", response.data);
      setUserData(response.data.updatedUser);
      alert("Name updated successfully!");
    } catch (err) {
      console.error("Failed to update user name", err);
      alert("Failed to update name");
    }
  };
  const handleDeleteUser = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      await axios.delete(`${API_URL}/protected/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("User deleted!");

      logOutUser();
      localStorage.removeItem("jwtToken");
      navigate("/showcase");
    } catch (err) {
      console.error("Failed to delete user", err);
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
              <div className="edit-user-form">
                <form onSubmit={handleEditUser}>
                  <input
                    type="text"
                    placeholder="New name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <button type="submit">Update Name</button>
                </form>
              </div>

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
              <h4>{offer.title}</h4>
              <p>{offer.description}</p>
              <div className="offer-card-inputs">
                <input
                  type="text"
                  value={offer.title}
                  placeholder="Title"
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
              </div>
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
