import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'https://transverse.adaptable.app/' 

const UserProfilePage = ({ loggedInUserId }) => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${API_URL}/protected/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        if (!response.ok) {
          throw new Error('could not fetch user data');
        }
        const userData = await response.json();
        setUserData(userData);
        setIsLoading(false);
      } catch (error) {
        console.error('coud not fetch user data:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>data of the user cannot be fetched</div>;
  }

  let userContent;
  if (userData) {
    if (loggedInUserId) {
      if (loggedInUserId === userId) {
        userContent = (
          <div className="user-profile">
            <h1>{userData.userName}</h1>
            <p>Email: {userData.email}</p>
          </div>
        );
      } else {
        userContent = (
          <div className="user-profile">
            <h1>{userData.userName}</h1>
            <p>{userData.userName} is registered, bravo!</p>
          </div>
        );
      }
    } else {
      userContent = (
        <div className="user-profile">
          <h1>{userData.userName}</h1>
          <p>Please log in to view all the information</p>
        </div>
      );
    }
  } else {
    userContent = <div>User does not exist</div>;
  }
  
  return userContent;
  
};

export default UserProfilePage;
