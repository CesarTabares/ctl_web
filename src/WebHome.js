import React from "react";
import "./WebHome.css";
import landing_img from "./img/landing_constr.png";

function WebHome() {
  return (
    <>
      <div className="div_img">
        <img src={landing_img} className="img_landing" />
      </div>
    </>
  );
}

export default WebHome;
