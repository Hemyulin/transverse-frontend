import React from 'react';
import { useParams } from 'react-router-dom'; // If you're using React Router for navigation
import Footer from '../components/Footer';

const OfferPage = () => {
    const { offerId } = useParams();

    // Fetch offer details based on offerId using useEffect or any other method

    // Placeholder data for offer details
    const offerDetails = {
        images: [
            "image_url_1",
            "image_url_2",
            "image_url_3"
        ],
        accommodationInfo: {
            // Accommodation details
            title: "Accommodation Title",
            description: "Accommodation Description",
            languageOffered: "Language Offered by Host",
            // Other details like amenities, etc.
        },
        location: {
            // Location details
            latitude: 48.8566, // Example latitude for Paris
            longitude: 2.3522, // Example longitude for Paris
        },
        hostReviews: [
            // Placeholder host review data
            { id: 1, rating: 4.5, comment: "Great host!" },
            { id: 2, rating: 5, comment: "Amazing experience!" },
            // Add more review objects as needed
        ]
    };

    return (
        <div>
            {/* Images related to the offer */}
            <div className="offer-images">
                {offerDetails.images.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
                ))}
            </div>
            {/* Accommodation Info */}
            <div className="offer-accommodation">
                <h2>{offerDetails.accommodationInfo.title}</h2>
                <p>{offerDetails.accommodationInfo.description}</p>
                <p>Language Offered: {offerDetails.accommodationInfo.languageOffered}</p>
                {/* Add more details like amenities, etc. */}
            </div>
            {/* Location Map */}
            <div className="offer-location">
                <h2>Location</h2>
                {/* Embed Google Maps or any other map service */}
                {/* Example using Google Maps: */}
                <iframe
                    title="Offer Location"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?q=${offerDetails.location.latitude},${offerDetails.location.longitude}&key=YOUR_API_KEY`}
                    allowFullScreen
                ></iframe>
            </div>
            {/* Host Reviews */}
            <div className="offer-reviews">
                <h2>Host Reviews</h2>
                {offerDetails.hostReviews.map(review => (
                    <div key={review.id}>
                        <p>Rating: {review.rating}</p>
                        <p>Comment: {review.comment}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default OfferPage;
