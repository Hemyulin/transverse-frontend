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
import LogoutPage from "./pages/SignOutPage";
import AboutPage from "./pages/AboutPage";
import OfferPage from "./pages/OfferPage";
import OtherUser from "./pages/OtherUser";

//states
import LoggedState from "./components/Logged_in_state";

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
            <LoggedState requireLoggedIn={false} redirectTo="/showcase">
              <SignUpPage />
            </LoggedState>
          }
        />

        <Route
          path="/profile"
          element={
            <LoggedState requireLoggedIn={false} redirectTo="/showcase">
              <OwnProfilePage />
            </LoggedState>
          }
        />

        <Route
          path="/user-home"
          element={
            <LoggedState requireLoggedIn={false} redirectTo="/showcase">
              <UserHomePage />
            </LoggedState>
          }
        />

        <Route
          path="/sign-in-page"
          element={
            <LoggedState requireLoggedIn={false} redirectTo="/showcase">
              <SignInPage />
            </LoggedState>
          }
        />
        <Route
          path="/sign-out-page"
          element={
            <LoggedState requireLoggedIn={true} redirectTo="/showcase">
              <LogoutPage />
            </LoggedState>
          }
        ></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/offer-page/offerId" element={<OfferPage />} />
        <Route path="/users/:userId" element={<OtherUser />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
