// import React from "react";
// import "./AboutComponent.css";
// function AboutComponent() {
//   return (
//     <div className="about-parent">
//       <div className="top-section"></div>
//       <div className="mid-section">
//         <div className="mid-left-section">
//           <span>NEW HOME FIXES</span>
//           <h1>We Take Care Of Your Problems</h1>
//           <p>
//             Mauris ac risus sed quam semper auctor. Nam tempus volutpat ipsum,
//             non viverra odio mollis mollis. Integer lacus ligula, imperdiet vel
//             massa in, maximus suscipit turpis. Aliquam erat volutpat. Ut vel
//             faucibus lectus.Mauris ac risus sed quam semper auctor. Nam tempus
//             volutpat ipsum, non viverra odio mollis mollis. Integer lacus
//             ligula,
//             <br />
//             Mauris ac risus sed quam semper auctor. Nam tempus volutpat ipsum,
//             non viverra odio mollis mollis. Integer lacus ligula, imperdiet vel
//             massa in, maximus suscipit turpis. Aliquam erat volutpat. Ut vel
//             faucibus lectus.
//           </p>
//           <button className="explore">EXPLORE MORE</button>
//         </div>

//         <div className="mid-right-section">
//           <img
//             src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241262.jpg"
//             alt="About Us"
//           />
//         </div>
//       </div>
//       <div className="bottom-section"></div>
//     </div>
//   );
// }

// export default AboutComponent;
import React from "react";
import "./AboutComponent.css";

function AboutComponent({ selectedColor }) {
  return (
    <div className="about-parent">
      <div className="top-section"></div>
      <div className="mid-section">
        <div className="mid-left-section">
          <span style={{ color: selectedColor }}>NEW HOME FIXES</span>
          <h1 style={{ color: selectedColor }}>
            We Take Care Of Your Problems
          </h1>
          <p>
            Mauris ac risus sed quam semper auctor. Nam tempus volutpat ipsum,
            non viverra odio mollis mollis. Integer lacus ligula, imperdiet vel
            massa in, maximus suscipit turpis. Aliquam erat volutpat. Ut vel
            faucibus lectus.Mauris ac risus sed quam semper auctor. Nam tempus
            volutpat ipsum, non viverra odio mollis mollis. Integer lacus
            ligula,
            <br />
            Mauris ac risus sed quam semper auctor. Nam tempus volutpat ipsum,
            non viverra odio mollis mollis. Integer lacus ligula, imperdiet vel
            massa in, maximus suscipit turpis. Aliquam erat volutpat. Ut vel
            faucibus lectus.
          </p>
          <button
            className="explore"
            style={{ backgroundColor: selectedColor }}
          >
            EXPLORE MORE
          </button>
        </div>

        <div className="mid-right-section">
          <img
            src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241262.jpg"
            alt="About Us"
          />
        </div>
      </div>
      <div className="bottom-section"></div>
    </div>
  );
}

export default AboutComponent;
