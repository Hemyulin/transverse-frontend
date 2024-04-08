import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EnterButton = () => {
  const navigate = useNavigate();
  const translations = [
    "Speak friend and enter",
    "Parla amico ed entra",
    "Habla amigo y entra",
    "Parle ami et entre",
    "Sprechen Sie Freund und treten Sie ein",
    "Говори, друг, и войди",
    "語れ友よ、そして入れ",
    "말해라 친구여, 그리고 들어가라",
  ];

  const [currentTranslation, setCurrentTranslation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTranslation(
        (prevTranslation) => (prevTranslation + 1) % translations.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [translations.length]);

  return (
    <button onClick={() => navigate("/")}>
      {translations[currentTranslation]}
    </button>
  );
};

export default EnterButton;
