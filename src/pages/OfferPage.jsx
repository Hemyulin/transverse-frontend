import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'; // react router have?
import Footer from '../components/Footer';

const API_URL = process.env.NODE_ENV === 'https://transverse.adaptable.app/' || 'http://localhost:5005';//doublecheck thet

const OfferPage = () => {
    const { offerId } = useParams();
    const [offerDetails, setOfferDetails] = useState(null);


      useEffect(() => {
        const getSingleOffer = async () => {
            try {
            const res = await fetch(`/api/offers/${offerId}`);
            const parsed = await res.json();
            setOfferDetails(parsed);
            } catch (error) {
                console.error("could not fetch the offer", error)
            } 
          };
        getSingleOffer();
      }, [offerId]);
      if (!offerDetails) {
        return <div>Loading...</div>
      }
  
    return (
        <div>
            <div className="offer-images">
                {offerDetails.images.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
                ))}
            </div>
            <div className="offer-accommodation">
                <h2>{offerDetails.title}</h2>
                <p>{offerDetails.description}</p>
            </div>
            {/* <div className="offer-location">
                <h2>Location</h2>
                <iframe
                    title="Offer Location"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?q=${offerDetails.location.latitude},${offerDetails.location.longitude}&key=API_KEY`} //check
                    allowFullScreen
                ></iframe>
            </div> */}
            {/* Host Reviews */}
            <div className="offer-reviews">
                <h2>Host Reviews</h2>
                {offerDetails.comments.map(review => (
                    <div key={review.id}>
                        <p>Rating: {review.rating}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default OfferPage;
