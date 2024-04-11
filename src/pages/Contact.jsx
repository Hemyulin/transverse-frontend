import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Contact.css";
const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="Contact-page">
      <h2>Contact us</h2>
      <h3>Github - Email - LinkedIn</h3>
      <div className="tab">
        <h4>Robert Cannon</h4>
        <h4>https://github.com/Memoryman2022</h4>
        <h4>rlacannon@gmail.com</h4>
      </div>
      <br />
      <div className="tab">
        <h4>Piero Schenato</h4>
        <h4>piero.schenato@gmail.com</h4>
        <h4>https://www.linkedin.com/in/piero-schenato-b09766181/</h4>
        <h4>https://github.com/pieroschenato</h4>
      </div>
      <br />
      <div className="tab">
        <h4>Daniel Budinsky</h4>
        <h4>https://github.com/Hemyulin</h4>
        <h4>budanielsky@gmail.com</h4>
      </div>
      <br />
    </div>
  );
};

export default ContactPage;
