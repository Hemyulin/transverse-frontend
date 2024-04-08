import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/Carousel";
import EnterButton from "../components/EnterButton";

function ShowcasePage() {
  return (
    <div className="showcase-page">
      <div className="logo-banner"></div>
      <div className="carousel">
        <ImageCarousel />
      </div>
      <div className="welcome-text">
        Welcome to Transverse, the unique platform where travel meets language
        learning. Dive into a world of authentic cultural exchange by staying
        with hosts who share your passion for languages. Whether you're looking
        to improve your Spanish in the heart of Madrid, master Japanese while
        living in Tokyo, or start your Italian journey in Rome, Transverse
        connects you with accommodations that do more than just offer a place to
        sleep. Our community is about creating meaningful interactions and
        mutual language practice opportunities. Hosts and guests become each
        other's tutors, immersing in local culture and dialects. With
        Transverse, your journey transcends traditional travel; it becomes an
        enriching learning experience, where every stay is a step closer to
        fluency. Discover, stay, and converse your way to linguistic mastery
        with Transverse.
      </div>
      <div className="example-reviews"></div>
      <div className="signup-prompt">
        <EnterButton />
      </div>
    </div>
  );
}

export default ShowcasePage;
