import React from "react";
import "./SubFooter.css";
function SubFooter({ selectedColor }) {
  return (
    <div className="sub-footer">
      <h3 style={{ backgroundColor: selectedColor }}>
        © Copyright 2024 All Rights Reserved to VibgyorWeb Technologies
      </h3>
    </div>
  );
}

export default SubFooter;
