import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drugs from "./Drugs";
import Home from "./Home";
import Lifestyle from "./Lifestyle";
import Contact from "./Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Summary({ patientData }) {
  return (
    <div>
      <p>Is Smoker: {patientData.isSmoker}</p>
      <p>Is Trying to Quit: {patientData.isTryingToQuit}</p>
      {/* other data... */}
    </div>
  );
}
export default Summary;
