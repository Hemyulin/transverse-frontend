import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUpPage() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
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
        "https://transverse-backend.adaptable.app/auth/registration",
        formData
      );
      console.log(response.data);
      navigate("/user-home");
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
          Sign up
        </button>
      </form>
      <p onClick={redirectToSignInPage}>Already registered?</p>
      <Link to="/sign-in-page">Sign in</Link>
    </div>
  );
}

export default SignUpPage;
