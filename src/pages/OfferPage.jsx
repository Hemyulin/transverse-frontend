import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import Footer from "../components/Footer";
import "./OfferPage.css";

const OfferPage = () => {
  const { id } = useParams();
  const [offerDetails, setOfferDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOfferDetails = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`${API_URL}/api/offers/${id}`);
        setOfferDetails(response.data);
      } catch (error) {
        console.error("Could not fetch the offer:", error);
        setError("Failed to fetch offer details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchOfferDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!offerDetails) {
    return <div>Offer not found.</div>;
  }

  return (
    <div className="offer-page">
      <div className="offer-images">
        {offerDetails.images?.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Offer Image ${index + 1}`} />
        ))}
      </div>
      <div className="offer-details">
        <h2>{offerDetails.title}</h2>
        <p>{offerDetails.description}</p>

        {offerDetails.host && (
          <div>
            <h3>Hosted by: {offerDetails.host.name}</h3>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OfferPage;
