import React from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const Contact = ({
  patientData,
  setPatientData,
  handlePatientData,
  updateProgress,
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
  const goToHome = () => {
    updateProgress(0);
  };
  const checkAllValidations = () => {
    for (const key in patientData) {
      if (!patientData[key].isValid) {
        alert("Not all questions are correctly completed");
        return;
      }
    }

    updateProgress(40);
    navigate("/Lifestyle");
  };

  return (
    <div className="q-container">
      <h1>Contact Information</h1>
      <div className="text-form">
        <div className="name">
          <label>
            First Name:{" "}
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
          <br />
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
        </div>
        <br />
        <label>
          Date of Birth:{" "}
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
          Phone Number:{" "}
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
          Email Address:{" "}
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
        <div className="nav-links">
          <Link to="/" onClick={goToHome}>
            &#8249; Prev
          </Link>
          <p onClick={checkAllValidations}> Next &#8250;</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
