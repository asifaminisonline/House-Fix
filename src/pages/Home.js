import React, { useRef, useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ServiceList from "../components/ServiceList";
import Bluespace from "../components/Bluespace";
import AboutComponent from "../components/AboutComponent";
import ProductComponent from "../components/ProductComponent";
import Contact from "../components/Contact";
import "./Home.css";
import SubFooter from "../components/SubFooter";

function Home() {
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceListRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);

  const themeColors = ["#023e8a", "#11887a", "black"];

  const [backgroundColor, setBackgroundColor] = useState(themeColors[0]);

  const handleDotClick = (colorIndex) => {
    setBackgroundColor(themeColors[colorIndex]);
  };

  const scrollToBanner = () => {
    bannerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServiceList = () => {
    serviceListRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    productRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Topbar selectedColor={backgroundColor} />
      <Navbar
        selectedColor={backgroundColor}
        scrollToBanner={scrollToBanner}
        scrollToAbout={scrollToAbout}
        scrollToServiceList={scrollToServiceList}
        scrollToProducts={scrollToProducts}
        scrollToContact={scrollToContact}
      />
      <div ref={bannerRef}>
        <Banner
          selectedColor={backgroundColor}
          gradientColors={[backgroundColor, "#fff"]} // Example gradient colors, adjust as needed
        />
      </div>
      <div ref={aboutRef}>
        <AboutComponent selectedColor={backgroundColor} />
      </div>
      <div ref={serviceListRef}>
        <ServiceList selectedColor={backgroundColor} />
      </div>
      <Bluespace selectedColor={backgroundColor} />
      <div ref={productRef}>
        <ProductComponent selectedColor={backgroundColor} />
      </div>
      <div ref={contactRef}>
        <Contact selectedColor={backgroundColor} />
      </div>

      <Bluespace selectedColor={backgroundColor} />
      <Footer selectedColor={backgroundColor} />
      <SubFooter selectedColor={backgroundColor} />

      <div className="theme-dot-container">
        {themeColors.map((color, index) => (
          <div
            key={index}
            className="theme-dot"
            style={{ backgroundColor: color }}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Home;
