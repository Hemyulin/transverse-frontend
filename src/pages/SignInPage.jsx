import { useState } from "react";
import "./SignInPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const redirectToRegisterPage = () => {
    navigate("/register-page");
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
        "https://transverse-backend.adaptable.app/auth/login",
        formData
      );
      console.log(response.data);
      navigate("/user-home");
    } catch (err) {
      console.log("There has been an error logging in", err.response);
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <div className="input-div">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-div">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          ></input>
        </div>
        <div className="button-div">
          <button>Sign in</button>
        </div>
      </form>
      <p onClick={redirectToRegisterPage}>
        Don't have an account? Register here!
      </p>
    </div>
  );
};
