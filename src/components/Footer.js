import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer({ selectedColor }) {
  return (
    <div className="footer-parent">
      <div className="child1">
        <img
          src="https://housefix.wpengine.com/wp-content/uploads/2023/04/Logo-Dark.svg"
          alt="404"
        />
        <p style={{ textAlign: "left", padding: "10px" }}>
          We can assist you with all aspects of house repair Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Consectetur natus maxime nobis
          delectus. Natus rem molestiae neque vero temporibus odio! Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Illo autem,{" "}
        </p>
      </div>
      <div className="child2 footer-links">
        <h2 style={{ color: selectedColor }}> Quick Links </h2>
        {/* <div className='footer-links'> */}

        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" activeClassName="active">
            Services
          </Link>
        </li>
        <li>
          <Link to="/products" activeClassName="active">
            Products
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </li>
      </div>

      <div className="child3">
        <h2 style={{ color: selectedColor }}>Contact Details</h2>
        <li>Address: Sringar Jammu & Kashmir, 190010</li>
        <li>Email: housefix@gmail.com</li>
        <li> Phone: +917780879289, 9682359172 </li>
      </div>

      <div className="child4">
        <h2 style={{ color: selectedColor }}>Subscribe us on</h2>

        <iframe
          width="auto"
          height="auto"
          src="https://www.youtube.com/embed/8WfNcbHe824?si=w8qPjgS_2LaJ-KKF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
