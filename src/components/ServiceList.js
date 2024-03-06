import React from "react";
import "./ServiceList.css";
import { services } from "../Data.js";

function ServiceList({ selectedColor }) {
  return (
    <>
      <div className="heading">
        <h1>
          <span style={{ backgroundColor: selectedColor }}>Our Services</span>
        </h1>
      </div>

      <div className="card-container">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img
              className="service-images"
              src={service.imageURL}
              alt={service.title}
            />
            <div className="card-content">
              <h2 style={{ color: selectedColor }}>{service.title}</h2>
              <p>{service.description}</p>
              <button style={{ backgroundColor: selectedColor }}>
                {service.buttonLink}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServiceList;
