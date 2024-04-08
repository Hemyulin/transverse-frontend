import { useState } from "react";
import "./SignInPage.css";
import axios from "axios";

export const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
        "http://localhost:5005/auth/login",
        formData
      );
      console.log(response.data);
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
            type="text"
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
    </div>
  );
};
