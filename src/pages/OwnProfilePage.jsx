import "./OwnProfilePage.css";

export const OwnProfilePage = () => {
  const API_URL =
    "https://backend-fakebnb.adaptable.app/apartments" ||
    "http://localhost:5005";

  return (
    <div className="own-profile-page">
      <div className="profile-details-card">
        <div className="img-and-name">
          <div className="profile-img-div">IMG</div>
          <h4>Bobby McBobface</h4>
        </div>
        <div className="profile-info">
          <ul>
            <li>Location</li>
            <li>Hobbies</li>
            <li>Languages</li>
          </ul>
        </div>
      </div>
      <div>dfsghmj</div>
    </div>
  );
};
