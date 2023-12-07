import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ updateProgress }) => {
  const navigate = useNavigate();

  const handleStartForm = () => {
    updateProgress(20);
    navigate("/Contact");
  };

  return (
    <div className="q-container">
      <h1>Hospital Intake Form</h1>
      <div className="home">
        <button onClick={handleStartForm}>Start Form</button>
      </div>
    </div>
  );
};

export default Home;
