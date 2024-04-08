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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="ShowcasePage" element={<ShowcasePage />} />
        <Route path="SignUpPage" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
