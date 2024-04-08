import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Contact.css";
const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="Contact-page">
      <h2>Contact us</h2>
      <h3>Github links</h3>
      <br />
      <h3>LinkedIn links</h3>
      <br />
      <h3>Email links</h3>
    </div>
  );
};

export default ContactPage;
