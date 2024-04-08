import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/SignUpPage";
import ShowcasePage from "./pages/ShowcasePage";
import UserHomePage from "./pages/UserHomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { OwnProfilePage } from "./pages/OwnProfilePage";
import { SignInPage } from "./pages/SignInPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/register-page" element={<SignUpPage />} />
        <Route path="/user-home" element={<UserHomePage />} />
        <Route path="/sign-in-page" element={<SignInPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
