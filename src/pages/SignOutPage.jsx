import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext/auth.context";

function LogoutPage() {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(true);

  useEffect(() => {
    logOutUser();
    setTimeout(() => {
      setIsLoggingOut(false);
      navigate("/sign-in-page");
    }, 1000);
  }, [logOutUser, navigate]);
  if (isLoggingOut) {
    return (
      <div>
        <p>logging out...</p>
      </div>
    );
  }
  return (
    <div>
      <p>redirecting to login</p>
    </div>
  );
}

export default LogoutPage;
