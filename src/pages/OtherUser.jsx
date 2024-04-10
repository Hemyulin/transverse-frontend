import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfilePage = ({ loggedInUserId }) => {
const {userId} = useParams();
const [userData, setUserData] = useState(null);
const [isOwnProfile, setIsOwnProfile] = useState(false);

  useEffect(() => {
    
    fetch(`/api/user/data/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setIsOwnProfile(data._id === loggedInUserId);
      })
      .catch(error => console.error('could not fetch user data:', error));
  }, [userId, loggedInUserId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  let loggedIn;
  if (isOwnProfile) {
loggedIn = (
    <p>
        Bio: {userData.bio}
    </p>
);
} else {
    loggedIn = <p>{userData.name} is successfully registered</p>
}
  return (
    <div className="user-profile">
      <h1>{userData.name}</h1>
    </div>
  );
};

export default UserProfilePage;
