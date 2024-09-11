import React from "react";
import Profile from "../Components/Profile/profile/profile.jsx"; // Adjust this based on your file structure
import logo from "../assets/logo.svg"; // Ensure this path is correct
import "./Layout.css"; // Style for the layout
import LandingPage from "./landingPage/landing/LandingPage.jsx";

export default function Layout() {
  return (
    <div>
      <nav className="all">
        <img className="logo" src={logo} alt="Logo" />
        <ul className="ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#collections">Collections</a>
          </li>
          <li>
            <a href="#category">Category</a>
          </li>
        </ul>
        <div>
          <Profile />
        </div>
      </nav>
      <LandingPage />
    </div>
  );
}
