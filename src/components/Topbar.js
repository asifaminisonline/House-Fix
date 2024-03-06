// import React from "react";
// import "./Topbar.css";

// function Topbar({ selectedColor }) {
//   return (
//     <div className="topbar-parent" style={{ backgroundColor: selectedColor }}>
//       <div className="topbar-left">
//         <h3>Welcome to House Fix</h3>
//       </div>
//       <div className="topbar-right">
//         <h3>✉ housefix@gmail.com</h3>
//         <h3>🗺 Srinagar Kashmir, 190011</h3>
//       </div>
//     </div>
//   );
// }

// export default Topbar;

import React from "react";
import "./Topbar.css";

function Topbar({ selectedColor }) {
  return (
    <div className="topbar-parent" style={{ backgroundColor: selectedColor }}>
      <div className="topbar-left">
        <h3>Welcome to House Fix</h3>
      </div>
      <div className="topbar-right">
        <h3>✉ housefix@gmail.com</h3>
        <h3>🗺 Srinagar Kashmir, 190011</h3>
      </div>
    </div>
  );
}

export default Topbar;
