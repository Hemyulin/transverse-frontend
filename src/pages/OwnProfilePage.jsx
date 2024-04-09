import { useParams } from "react-router-dom";
import "./OwnProfilePage.css";
import { useEffect, useState } from "react";

export const OwnProfilePage = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  const API_URL =
    "https://transverse-backend.adaptable.app" || "http://localhost:5005";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${API_URL}/protected/user/${id}`);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="own-profile-page">
      <div className="profile-details-card">
        <div className="img-and-name">
          <div className="profile-img-div">IMG</div>
          <h4>Bobby McBobface</h4>
        </div>
        <div className="profile-info">
          <ul>
            <li>response.data.email</li>
            <li>Hobbies</li>
            <li>Languages</li>
          </ul>
        </div>
      </div>
      <div>dfsghmj</div>
    </div>
  );
};
