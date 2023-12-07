import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Footer = ({ progress }) => {
  return (
    <div>
      <hr />
      <div className="footer-progress-bar">
        <ProgressBar now={progress} />
      </div>
    </div>
  );
};

export default Footer;
