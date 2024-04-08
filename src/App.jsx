import React from "react";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SignUpPage from "./pages/SignUpPage";
import ShowcasePage from "./pages/ShowcasePage";
import UserHomePage from "./pages/UserHomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/user-home" element={<UserHomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
