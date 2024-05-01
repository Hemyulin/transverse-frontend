import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import "./OffersListPage.css";
import { useNavigate } from "react-router-dom";
import { OfferCard } from "../components/offerCard/OfferCard";

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
      {offers.map((offer) => (
        <div key={offer._id} onClick={() => handleOfferClick(offer._id)}>
          <OfferCard offer={offer} formatDate={formatDate} />
        </div>
      ))}
    </div>
  );
};
