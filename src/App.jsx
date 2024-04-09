import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact";
import SignUpPage from "./pages/SignUpPage";
import ShowcasePage from "./pages/ShowcasePage";
import UserHomePage from "./pages/UserHomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { OwnProfilePage } from "./pages/OwnProfilePage";
import { SignInPage } from "./pages/SignInPage";
import AboutPage from "./pages/AboutPage";
import OfferPage from "./pages/OfferPage";

//states
import LoggedOutState from "./components/Logged_out_state";
import LoggedInState from "./components/Logged_in_state";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route
          path="/register-page"
          element={
            <LoggedOutState>
              <SignUpPage />
            </LoggedOutState>
          }
        />

        <Route
          path="/user-home"
          element={
            <LoggedInState>
              <UserHomePage />
            </LoggedInState>
          }
        />

        <Route
          path="/sign-in-page"
          element={
            <LoggedOutState>
              <SignInPage />
            </LoggedOutState>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/offer-page" element={<OfferPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
