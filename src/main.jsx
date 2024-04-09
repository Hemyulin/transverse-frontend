import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./authContext/auth.context.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <Router>
        <App />
      </Router>
    </AuthProviderWrapper>
  </React.StrictMode>
);
