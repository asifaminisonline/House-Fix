import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar(selectedColor) {
  const items = useSelector((state) => state.cart);
  return (
    <div className="nav-parent">
      <div className="logo">
        <img
          src="https://housefix.wpengine.com/wp-content/uploads/2023/04/Logo-Dark.svg"
          alt="Logo"
        />
      </div>
      <div className="nav-links">
        <li>
          <Link to="/">
            <button style={{ color: selectedColor }}>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button style={{ color: selectedColor }}>About</button>
          </Link>
        </li>
        <li>
          <button style={{ color: selectedColor }}>Services</button>
        </li>
        <li>
          <button style={{ color: selectedColor }}>Products</button>
        </li>
        <li>
          <button style={{ color: selectedColor }}>Contact</button>
        </li>
      </div>
      <div className="login">
        <Link to="/sign-up" style={{ backgroundColor: selectedColor }}>
          Sign Up
        </Link>
        <Link to="/cart" style={{ backgroundColor: selectedColor }}>
          <span className="cart">Cart : {items.length} </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
