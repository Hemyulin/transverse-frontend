import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function SignUpPage() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    spokenLanguages: [],
    hostedLanguages: [],
    profileImage: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const submitData = {
      ...formData,
      spokenLanguages: formData.spokenLanguages
        .split(",")
        .map((lang) => lang.trim()),
      hostedLanguages: formData.hostedLanguages
        .split(",")
        .map((lang) => lang.trim()),
    };
    console.log(formData);

    try {
      const response = await axios.post(
        `${API_URL}/auth/registration`,
        submitData
      );
      console.log(submitData);
      const { token } = response.data;
      if (token) {
        localStorage.setItem("jwtToken", token);
        navigate("/user-home");
      } else {
        console.log("Token not received");
      }
    } catch (error) {
      console.log("Registration error", error.response);
    }
  };
  const redirectToSignInPage = () => {
    navigate("/sign-in-page");
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
        <label>
          Spoken Languages (comma-separated):
          <input
            type="text"
            name="spokenLanguages"
            value={formData.spokenLanguages}
            onChange={handleChange}
            placeholder="e.g., English, Spanish"
          />
        </label>
        <label>
          Hosted Languages (comma-separated):
          <input
            type="text"
            name="hostedLanguages"
            value={formData.hostedLanguages}
            onChange={handleChange}
            placeholder="e.g., French, German"
          />
        </label>
        <label>
          Profile Image URL:
          <input
            type="text"
            name="profileImage"
            placeholder="Paste your profile image URL here"
            value={formData.profileImage}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="sub-btn">
          Sign up
        </button>
      </form>
      <p onClick={redirectToSignInPage}>Already registered?</p>
      <Link to="/sign-in-page">Sign in</Link>
    </div>
  );
}

export default SignUpPage;
