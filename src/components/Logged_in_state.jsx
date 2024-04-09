import { useContext } from "react";
import { AuthContext } from "../authContext/auth.context";
import { Navigate } from "react-router-dom";

function LoggedState({ requireLoggedIn, redirectTo, children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading ...</p>;

  if ((requireLoggedIn && !isLoggedIn) || (!requireLoggedIn && isLoggedIn)) {
    return <Navigate to={redirectTo} />;
  }
  return children;
}

export default LoggedState;
