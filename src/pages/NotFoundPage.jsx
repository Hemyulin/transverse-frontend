import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Oops! This page doesn't exist!</h1>
      <button className="back-button" onClick={redirectToHomePage}>
        Back to the home page
      </button>
    </div>
  );
};
