import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar({
  scrollToBanner,
  scrollToAbout,
  scrollToServiceList,
  scrollToProducts,
  scrollToContact,
  selectedColor,
}) {
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
          <button style={{ color: selectedColor }} onClick={scrollToBanner}>
            Home
          </button>
        </li>
        <li>
          <button style={{ color: selectedColor }} onClick={scrollToAbout}>
            About
          </button>
        </li>
        <li>
          <button
            style={{ color: selectedColor }}
            onClick={scrollToServiceList}
          >
            Services
          </button>
        </li>
        <li>
          <button style={{ color: selectedColor }} onClick={scrollToProducts}>
            Products
          </button>
        </li>
        <li>
          <button style={{ color: selectedColor }} onClick={scrollToContact}>
            Contact
          </button>
        </li>
      </div>
      <div className="login">
        <Link to="/sign-up" style={{ backgroundColor: selectedColor }}>
          Get Started
        </Link>
        <Link to="/cart" style={{ backgroundColor: selectedColor }}>
          <span className="cart">Cart : {items.length} </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
