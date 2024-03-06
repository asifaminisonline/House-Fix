import React from "react";
import "./Bluespace.css";
function Bluespace({ selectedColor }) {
  return (
    <>
      <h1
        className="spacer"
        style={{
          height: "20px",
          backgroundColor: selectedColor,
          margin: "50px 0px",
        }}
      >
        {" "}
      </h1>
    </>
  );
}

export default Bluespace;
