import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import FeedbackIcon from "./assets/FeedbackIcon.png";
import { useLocation } from "react-router-dom"; // Import useLocation hook

function Header() {
  const location = useLocation(); // Use the useLocation hook to get the location object
  const { state } = location;
  const name = state ? state.name : null;
  
  return (
    <>
      <div className="header">
        <img src={FeedbackIcon} alt="Feedback Logo" className="logo" />
        <h1>Feedback Collection System</h1>
        {name && <span className="name">Welcome, {name}!</span>}
        {!name && (
          <>
            <a
              href="http://localhost:5173/Login"
              className="btn-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
            <a
              href="http://localhost:5173/register"
              className="btn-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </a>
          </>
        )}
      </div>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default Header;
