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
    isSmoker: null,
    isTryingToQuit: null,
    isHarmReduxYes: null,
    isDrugs: null,
    otherDrugs: null,
    isTryingToQuitDrugs: null,
    isHarmReduxYesDrugs: null,
  });

  const handlePatientData = (patientData) => {
    setPatientData(patientData);
  };

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
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
