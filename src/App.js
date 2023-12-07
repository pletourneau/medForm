import "./App.css";
import "./components/Footer.css";
import Drugs from "./components/Drugs";
import Home from "./components/Home";
import Lifestyle from "./components/Lifestyle";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);

  const updateProgress = (progress) => {
    setProgress(progress);
  };

  const [patientData, setPatientData] = useState({
    firstName: { value: "", isValid: true },
    lastName: { value: "", isValid: true },
    dateOfBirth: { value: null, isValid: true },
    phoneNumber: { value: "", isValid: true },
    email: { value: "", isValid: true },
    isSmoker: { value: "", isValid: true },
    isTryingToQuit: { value: "", isValid: true },
    isHarmReduxYes: { value: "", isValid: true },
    isDrugs: { value: "", isValid: true },
    otherDrugs: { value: "", isValid: true },
    isTryingToQuitDrugs: { value: "", isValid: true },
    isHarmReduxYesDrugs: { value: "", isValid: true },
    isExercise: { value: "", isValid: true },
    minWk: { value: "", isValid: true },
    exTypes: { value: "", isValid: true },
    isSex: { value: "", isValid: true },
    isSexQ: { value: "", isValid: true },
    sexQ: { value: "", isValid: true },
  });

  const handlePatientData = (patientData) => {
    setPatientData(patientData);
  };

  return (
    <React.Fragment>
      <div className="main">
        <Header progress={progress} />
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home updateProgress={updateProgress} />}
            />
            <Route
              path="/Contact"
              element={
                <Contact
                  patientData={patientData}
                  setPatientData={setPatientData}
                  handlePatientData={handlePatientData}
                  updateProgress={updateProgress}
                />
              }
            />
            <Route
              path="/Drugs"
              element={
                <Drugs
                  patientData={patientData}
                  setPatientData={setPatientData}
                  handlePatientData={handlePatientData}
                  updateProgress={updateProgress}
                />
              }
            />
            <Route
              path="/Lifestyle"
              element={
                <Lifestyle
                  patientData={patientData}
                  setPatientData={setPatientData}
                  handlePatientData={handlePatientData}
                  updateProgress={updateProgress}
                />
              }
            />{" "}
            <Route
              path="/Summary"
              element={
                <Summary
                  patientData={patientData}
                  updateProgress={updateProgress}
                />
              }
            />
          </Routes>
        </Router>
      </div>
      <Footer progress={progress} />
    </React.Fragment>
  );
}

export default App;
