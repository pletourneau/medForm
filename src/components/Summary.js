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
      <p>
        Name: {patientData.firstName.value} {patientData.lastName.value}
      </p>
      <p>Email: {patientData.email.value}</p>
      <p>Date of Birth: {patientData.dateOfBirth.value}</p>
      <p>Phone Number: {patientData.phoneNumber.value}</p>
      <p>Smoker: {patientData.isSmoker ? "Yes" : "No"}</p>
      <p>Trying to Quit: {patientData.isTryingToQuit ? "Yes" : "No"}</p>
      <p>
        Would like to discuss harm reduction:{" "}
        {patientData.isHarmRedux ? "Yes" : "No"}
      </p>

      {/* <p>Is Smoker: {patientData.isSmoker}</p>
      <p>Is Trying to Quit: {patientData.isTryingToQuit}</p>
      <p> {patientData.email} </p> */}
      {/* other data... */}
      <div>
        <Link to="/Lifestyle">Prev</Link>
      </div>
    </div>
  );
}
export default Summary;
