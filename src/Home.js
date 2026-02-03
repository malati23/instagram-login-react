// Home.js
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="home-page">
      <div className="home-card">
        <h1 className="home-logo">Instagram</h1>
        <p className="home-text">Welcome! You are logged in 🎉</p>

        <div className="home-actions">
          <button className="home-btn">Go to Profile</button>
          <button className="home-btn logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
