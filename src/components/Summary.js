import React from "react";
import { Link } from "react-router-dom";
import db from "./../firebase.js";
import { collection, addDoc } from "firebase/firestore";

function Summary({ patientData, updateProgress }) {
  const formattedDateOfBirth = patientData.dateOfBirth.value
    ? new Date(patientData.dateOfBirth.value).toLocaleDateString()
    : "";

  const addToDatabase = async () => {
    const collectionRef = collection(db, "patient");
    await addDoc(collectionRef, patientData);
  };
  const goToLifestyle = () => {
    updateProgress(40);
  };
  const goToFinish = () => {
    updateProgress(100);
  };

  return (
    <div className="q-container">
      <h1>Summary</h1>
      <div className="summary">
        <p>
          Name: {patientData.firstName.value} {patientData.lastName.value}
        </p>
        <p>Email: {patientData.email.value}</p>
        <p>Date of Birth: {formattedDateOfBirth}</p>
        <p>Phone Number: {patientData.phoneNumber.value}</p>

        <p>Exercise: {patientData.isExercise ? "Yes" : "No"}</p>
        {/* <p>
        Types of Excercise:{" "}
        {patientData.exTypes ? patientData.exTypes.value : "NA"}{" "}
      </p> */}
        <p>Sexually Active: {patientData.isSex ? "Yes" : "No"}</p>
        {/* <p>
        Sexual concerns:{" "}
        {patientData.sexQ.value ? patientData.sexQ.value : "Not provided"}
      </p> */}

        <p>Smoker: {patientData.isSmoker ? "Yes" : "No"}</p>
        <p>Trying to Quit: {patientData.isTryingToQuit ? "Yes" : "No"}</p>
        <p>
          Would like to discuss harm reduction:{" "}
          {patientData.isHarmReduxYes ? "Yes" : "No"}
        </p>
        {/* <p>Other drugs: {patientData.otherDrugs.value}</p> */}
        <p>Trying to Quit: {patientData.isTryingToQuitDrugs ? "Yes" : "No"}</p>
        <p>
          Would like to discuss harm reduction:{" "}
          {patientData.isHarmReduxYesDrugs ? "Yes" : "No"}
        </p>

        {/* <button onClick={handleSubmit}>Submit</button>  */}
        {/* <button onClick={addToDatabase, goToFinish}>Submit</button> */}
        <button
          onClick={() => {
            addToDatabase();
            goToFinish();
          }}
        >
          Submit
        </button>

        <div className="nav-links">
          <Link to="/Lifestyle" onClick={goToLifestyle}>
            &#8249; Prev
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Summary;
