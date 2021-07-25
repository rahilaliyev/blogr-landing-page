import React from "react";
import DesktopImage from "../images/cropped.png";
import "../design/FourthPart.scss"

const FourthPart = () => {
  return (
    <div className="fourth-part">
      <div className="fourth-part-image">
        <img src={DesktopImage} alt={DesktopImage}></img>
      </div>
      <div className="third-text">
        <div className="third-part-text">
          <h2>Free, open, simple</h2>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div className="third-part-text">
          <h2>Powerful tooling</h2>
          <p>
            Batteries included. We build a simple and straightfoward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthPart;
