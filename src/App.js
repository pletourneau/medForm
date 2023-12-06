import "./App.css";
import Drugs from "./components/Drugs";
import Home from "./components/Home";
import Lifestyle from "./components/Lifestyle";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [patientData, setPatientData] = useState({
    isSmoker: { value: "", isValid: true },
    isTryingToQuit: { value: "", isValid: true },
    isHarmReduxYes: { value: "", isValid: true },
    isDrugs: { value: "", isValid: true },
    otherDrugs: { value: "", isValid: true },
    isTryingToQuitDrugs: { value: "", isValid: true },
    isHarmReduxYesDrugs: { value: "", isValid: true },
    firstName: { value: "", isValid: true },
    lastName: { value: "", isValid: true },
    dateOfBirth: { value: null, isValid: true },
    phoneNumber: { value: "", isValid: true },
    email: { value: "", isValid: true },
  });

  const handlePatientData = (patientData) => {
    setPatientData(patientData);
  };

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Contact"
            element={
              <Contact
                patientData={patientData}
                setPatientData={setPatientData}
                handlePatientData={handlePatientData}
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
              />
            }
          />
          <Route path="/Lifestyle" element={<Lifestyle />} />
          <Route
            path="/Summary"
            element={<Summary patientData={patientData} />}
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
