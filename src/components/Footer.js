import React, { useEffect, useState } from "react";

const Footer = ({ progress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    setCurrentProgress(progress);
  }, [progress]);

  return (
    <div>
      <hr />
      <div>
        <div
          style={{
            width: `${currentProgress}%`,
            backgroundColor: "lightblue",
            height: "20px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Footer;
