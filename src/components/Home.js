import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const handleStartForm = () => {
    // updateOverallProgress("Contact");
  };

  return (
    <div>
      <h2>Hospital Medical Form</h2>
      <Link to="/Contact" onClick={handleStartForm}>
        Start Form
      </Link>
    </div>
  );
};

export default Home;
