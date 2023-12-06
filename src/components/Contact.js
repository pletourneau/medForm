import React from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Contact = ({
  patientData,
  setPatientData,
  handlePatientData,
  // updateOverallProgress,
}) => {
  const navigate = useNavigate();

  const validateFirstName = (value) => {
    return /^[^\d]+$/.test(value);
  };

  const validateLastName = (value) => {
    return /^[^\d]+$/.test(value);
  };

  const validateDateOfBirth = (value) => {
    return value !== null;
  };

  const validatePhoneNumber = (value) => {
    return /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(value);
  };

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handlepatientData = (name, value) => {
    let isValid = true;

    switch (name) {
      case "firstName":
        isValid = validateFirstName(value);
        break;
      case "lastName":
        isValid = validateLastName(value);
        break;
      case "dateOfBirth":
        isValid = validateDateOfBirth(value);
        break;
      case "phoneNumber":
        isValid = validatePhoneNumber(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      default:
        break;
    }

    if (name === "dateOfBirth") {
      setPatientData((prevData) => ({
        ...prevData,
        dateOfBirth: { value, isValid },
      }));
    } else {
      setPatientData((prevData) => ({
        ...prevData,
        [name]: { value, isValid },
      }));
    }
  };

  const checkAllValidations = () => {
    for (const key in patientData) {
      if (!patientData[key].isValid) {
        alert("Not all questions are correctly completed");
        return;
      }
    }

    // If all validations pass, update the progress and navigate to the next page
    // updateOverallProgress("Drugs"); // Assuming the next page is "Drugs"
    navigate("/Drugs");
  };

  return (
    <div>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={patientData.firstName.value}
          onChange={(event) =>
            handlepatientData("firstName", event.target.value)
          }
        />
      </label>{" "}
      {!patientData.firstName.isValid && (
        <div style={{ color: "red" }}>Invalid first name!</div>
      )}
      <br />{" "}
      <label>
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          value={patientData.lastName.value}
          onChange={(event) =>
            handlepatientData("lastName", event.target.value)
          }
        />
      </label>{" "}
      {!patientData.lastName.isValid && (
        <div style={{ color: "red" }}>Invalid last name!</div>
      )}
      <br />
      <label>
        Date of Birth:
        <DatePicker
          selected={
            patientData.dateOfBirth.value
              ? new Date(patientData.dateOfBirth.value)
              : new Date("01/01/1900")
          }
          onChange={(date) => handlepatientData("dateOfBirth", date)}
          dateFormat="MM/dd/yyyy"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={150}
        />
      </label>
      {!patientData.dateOfBirth.isValid && (
        <div style={{ color: "red" }}>Invalid date of birth</div>
      )}
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={patientData.phoneNumber.value}
          onChange={(event) =>
            handlepatientData("phoneNumber", event.target.value)
          }
        />
      </label>{" "}
      {!patientData.phoneNumber.isValid && (
        <div style={{ color: "red" }}>Invalid phone number</div>
      )}
      <br />
      <label>
        Email Address:
        <input
          type="text"
          name="email"
          value={patientData.email.value}
          onChange={(event) => handlepatientData("email", event.target.value)}
        />
      </label>{" "}
      {!patientData.email.isValid && (
        <div style={{ color: "red" }}>Invalid email address</div>
      )}
      <br />
      <div>
        <button onClick={checkAllValidations}>Next</button>
      </div>
    </div>
  );
};

export default Contact;
