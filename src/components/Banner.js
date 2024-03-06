import React from "react";
import "./Banner.css";

function Banner({ selectedColor }) {
  return (
    <div className="image">
      <img
        src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="loading"
      />
      <div className="overlay">
        <h1>Our Services</h1>
        <p>Services we offer</p>
      </div>

      <div></div>
    </div>
  );
}

export default Banner;
