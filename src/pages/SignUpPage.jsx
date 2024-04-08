import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(
      event.target, // There has been a change in THIS field here
      event.target.value // Here's its content
    );
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5005/auth/registration",
        formData
      );
      console.log(response.data);
      window.location.href = "/UserHomePage";
    } catch (error) {
      console.log("nope", error.response);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="userName"
            placeholder="NAME"
            value={formData.userName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="sub-btn">
          <Link to="/user-home">Submit</Link>
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
