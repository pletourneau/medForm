import React from "react";
import { Link } from "react-router-dom";
import db from "./../firebase.js";
import { collection, addDoc } from "firebase/firestore";

function Summary({ patientData }) {
  const formattedDateOfBirth = patientData.dateOfBirth.value
    ? new Date(patientData.dateOfBirth.value).toLocaleDateString()
    : "";

  const addToDatabase = async () => {
    const collectionRef = collection(db, "patient");
    await addDoc(collectionRef, patientData);
  };

  // const handleSubmit = () => {
  // const dataToSend = {
  //   firstName: patientData.firstName.value || "",
  //   lastName: patientData.lastName.value || "",
  //   dateOfBirth: patientData.dateOfBirth.value || null,
  //   phoneNumber: patientData.phoneNumber.value || "",
  //   email: patientData.email.value || "",
  //   isSmoker: patientData.isSmoker.value || "",
  //   isTryingToQuit: patientData.isTryingToQuit.value || "",
  //   isHarmReduxYes: patientData.isHarmReduxYes.value || "",
  //   isDrugs: patientData.isDrugs.value || "",
  //   otherDrugs: patientData.otherDrugs.value || "",
  //   isTryingToQuitDrugs: patientData.isTryingToQuitDrugs.value || "",
  //   isHarmReduxYesDrugs: patientData.isHarmReduxYesDrugs.value || "",
  //   isExercise: patientData.isExercise.value || "",
  //   minWk: patientData.minWk.value || "",
  //   exTypes: patientData.exTypes.value || "",
  //   isSex: patientData.isSex.value || "",
  //   isSexQ: patientData.isSexQ.value || "",
  //   sexQ: patientData.sexQ.value || "",
  // };
  //   addToDatabase(patientData);
  // };

  return (
    <div>
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
      <button onClick={addToDatabase}>Submit</button>
      <div>
        <Link to="/Lifestyle">Prev</Link>
      </div>
    </div>
  );
}
export default Summary;
