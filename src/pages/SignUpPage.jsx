import React, { useState, useEffect } from "react";
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
  });

  const navigate = useNavigate();

  const redirectToSignInPage = () => {
    navigate("/sign-in-page");
  };

  const handleChange = (event) => {
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
        `${API_URL}/auth/registration`,
        formData
      );
      const { token } = response.data;
      if (token) {
        localStorage.setItem("jwtToken", token);
        console.log(response.data, "this is the token and user object");
        navigate("/user-home");
      } else {
        console.log("Token not received");
      }
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
          <label>
            Spoken Languages:
            <input
            type="text"
            name="spokenLanguages"
            value={formData.spokenLanguages}
            onChange={handleChange}
            placeholder="SPOKEN LANGUAGES"
          />
        </label>
        <label>
          Hosted Languages:
          <input
          type="text"
          name="hostedLanguages"
          value={formData.hostedLanguages}
          onChange={handleChange}
          placeholder="HOSTED LANGUAGES"
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
