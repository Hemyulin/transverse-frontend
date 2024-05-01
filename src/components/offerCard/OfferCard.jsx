import "./offerCard.css";

export const OfferCard = ({ offer, formatDate }) => {
  return (
    <div className="offer-card">
      <h3>{offer.title}</h3>
      <p>{offer.description}</p>
      <p>Hosted by: {offer.host ? offer.host.userName : "Unknown"}</p>
      <div className="offer-card-img">
        <img src={offer.offerImage}></img>
      </div>
      <p>Available From: {formatDate(offer.availableFrom)}</p>
      <p>Available Until: {formatDate(offer.availableUntil)}</p>
      <p>Utilities: {offer.utilities.join(", ")}</p>
    </div>
  );
};
