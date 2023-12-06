import "./App.css";
import "./components/Footer.css";
import Drugs from "./components/Drugs";
import Home from "./components/Home";
import Lifestyle from "./components/Lifestyle";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import React, { useState } from "react";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const progressPercentages = {
  //   Home: 20,
  //   Contact: 40,
  //   Drugs: 60,
  //   Lifestyle: 80,
  //   Summary: 100,
  // };
  // const [overallProgress, setOverallProgress] = useState(0);

  // Function to update overall progress
  // const updateOverallProgress = (page) => {
  //   setOverallProgress(progressPercentages[page]);
  // };

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
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
              // updateOverallProgress={() => updateOverallProgress("Home")}
              />
            }
          />
          <Route
            path="/Contact"
            element={
              <Contact
                patientData={patientData}
                setPatientData={setPatientData}
                handlePatientData={handlePatientData}
                // updateOverallProgress={() => updateOverallProgress("Contact")}
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
                // updateOverallProgress={() => updateOverallProgress("Drugs")}
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
                // updateOverallProgress={() => updateOverallProgress("Lifestyle")}
              />
            }
          />{" "}
          <Route
            path="/Summary"
            element={
              <Summary
                patientData={patientData}
                // updateOverallProgress={() => updateOverallProgress("Summary")}
              />
            }
          />
        </Routes>
      </Router>
      {/* <Footer progress={overallProgress} /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
