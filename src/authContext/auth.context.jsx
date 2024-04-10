import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const registerUser = (userName, email, password) => {
    setIsLoading(true);
    axios
      .post(`${API_URL}/auth/registration`, { userName, email, password })
      .then(() => loginUser(email, password)) //log in after registration
      .catch((error) =>
        setAuthError(error.response?.data.message || "Registration failed")
      )
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password) => {
    setAuthError(null);
    setIsLoading(true);
    axios
      .post(`${API_URL}/auth/login`, { email, password })
      .then((response) => {
        const token = response.data.token;
        if (token) {
          storeToken(token);
          authenticateUser();
        } else {
          setAuthError("No token received");
        }
      })
      .catch((error) => {
        setAuthError(error.response?.data.message || "Login failed");
      })
      .finally(() => setIsLoading(false));
  };

  const storeToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("jwtToken");

    if (!storedToken) {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);

      return;
    }
    axios
      .get(`${API_URL}/auth/verify`, {
        headers: { authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const user = response.data;
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);
        console.log("test");
      })
      .catch((error) => {
        setAuthError(error.response?.data.message || "Failed to authenticate");
        setIsLoggedIn(false);
        setUser(null);
      })
      .finally(() => setIsLoading(false));
  };

  const removeToken = () => {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("jwtToken");
  };

  const logOutUser = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
    setIsLoading(false);
    setUser(null);
    removeToken();
  };

  useEffect(() => {
    authenticateUser();
    console.log(isLoggedIn, "isLoggedIn state updated");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
        loginUser,
        registerUser,
        authError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
