import React, { useState } from "react";
import "./Contact.css";

function Contact({ selectedColor }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend or perform validation
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      address: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="contact-parent">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button style={{ backgroundColor: selectedColor }} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211426.63515843343!2d74.64194166262001!3d34.10689274342694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855686e3c5ef%3A0x66244b7cc1e305c6!2sSrinagar!5e0!3m2!1sen!2sin!4v1708364512086!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Find us on Google Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
