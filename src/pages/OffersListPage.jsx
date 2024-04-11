import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import "./OffersListPage.css";
import { useNavigate } from "react-router-dom";

export const OffersListPage = () => {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();

  const fetchOffers = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/offers`);
      setOffers(response.data.offers);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleOfferClick = (offerId) => {
    console.log("Offer clicked:", offerId);
    navigate(`/offer-page/${offerId}`);
  };

  return (
    <div className="offers-list">
      <h2>Offers List</h2>
      {offers.map((offer) => (
        <div
          key={offer._id}
          className="offer-panel"
          onClick={() => handleOfferClick(offer._id)}
        >
          <h3>{offer.title}</h3>
          <p>{offer.description}</p>
          <p>Hosted by: {offer.host ? offer.host.userName : "Unknown"}</p>
          <div className="offer-card">
            <img src={offer.offerImage}></img>
          </div>
          <p>Available From: {formatDate(offer.availableFrom)}</p>
          <p>Available Until: {formatDate(offer.availableUntil)}</p>
          <p>Utilities: {offer.utilities.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};
