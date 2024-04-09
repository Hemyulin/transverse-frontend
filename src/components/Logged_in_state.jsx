import { useContext, useEffect } from "react";
import { AuthContext } from "../authContext/auth.context";
import { useNavigate } from "react-router-dom";

function LoggedState({ requireLoggedIn, redirectTo, children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (requireLoggedIn !== isLoggedIn) {
        navigate(redirectTo);
      }
    }
  }, [isLoggedIn, isLoading, requireLoggedIn, redirectTo, navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return children;
}

export default LoggedState;
