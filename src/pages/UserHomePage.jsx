import React, { useState, useEffect } from "react";
import axios from "axios";

function UserHomePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user/data");
        setUserData(response.data);
      } catch (error) {
        console.error("Erroir finding data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Welcome User</h1>
    </div>
  );
}
export default UserHomePage;
