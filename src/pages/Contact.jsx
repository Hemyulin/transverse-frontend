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
        <h4>
          <a
            href="https://github.com/Memoryman2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </h4>
        <h4>
          <a href="mailto:rlacannon@gmail.com">rlacannon@gmail.com</a>
        </h4>
      </div>
      <br />
      <div className="tab">
        <h4>Piero Schenato</h4>
        <h4>
          <a
            href="https://www.linkedin.com/in/piero-schenato-b09766181/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </h4>
        <h4>
          <a
            href="https://github.com/pieroschenato"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </h4>
        <h4>
          <a href="mailto:piero.schenato@gmail.com">piero.schenato@gmail.com</a>
        </h4>
      </div>
      <br />
      <div className="tab">
        <h4>Daniel Budiansky</h4>
        <h4>
          <a
            href="https://www.linkedin.com/in/daniel-budiansky-fullstack"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </h4>
        <h4>
          <a
            href="https://github.com/Hemyulin"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </h4>
        <h4>
          <a href="mailto:budanielsky@gmail.com">budanielsky@gmail.com</a>
        </h4>
      </div>
      <br />
    </div>
  );
};

export default ContactPage;
