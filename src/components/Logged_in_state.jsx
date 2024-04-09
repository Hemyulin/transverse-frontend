import { useContext } from "react";
import { AuthContext } from "../authContext/auth.context";
import { Navigate } from "react-router-dom";

function LoggedInState({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading ...</p>;

  if (isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default LoggedInState;
