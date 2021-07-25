import React from "react";
import "../design/ThirdPart.scss";
import Phone from "../images/illustration-phones.svg";

const ThirdPart = () => {
  return (
    <div className="background-third-part">
      <div className="mobile-phonecontainer">
        <img src={Phone} alt="Phone" />
      </div>
      <div className="third-part-text">
        <h1>State of the Art Infrastructure</h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive
        </p>
      </div>
    </div>
  );
};

export default ThirdPart;
