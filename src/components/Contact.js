import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [contactData, setContactData] = useState({
    firstName: { value: "", isValid: true },
    lastName: { value: "", isValid: true },
    dateOfBirth: { value: null, isValid: true },
    phoneNumber: { value: "", isValid: true },
    email: { value: "", isValid: true },
  });

  const validateFirstName = (value) => {
    return /^[^\d]+$/.test(value); // For example, require at least one character
  };

  const validateLastName = (value) => {
    return /^[^\d]+$/.test(value); // For example, require at least one character
  };

  const validateDateOfBirth = (value) => {
    return value !== null; // For example, require a selected date
  };

  const validatePhoneNumber = (value) => {
    return /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(value);
    // Example regex for US phone number format (XXX-XXX-XXXX or (XXX) XXX-XXXX)
  };

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    // Example regex for basic email format
  };

  const handleContactData = (name, value) => {
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
      setContactData((prevData) => ({
        ...prevData,
        dateOfBirth: { value, isValid }, // Update dateOfBirth directly with a Date object
      }));
    } else {
      setContactData((prevData) => ({
        ...prevData,
        [name]: { value, isValid }, // Update value and validity for other fields
      }));
    }
  };
  const navigate = useNavigate();

  const checkAllValidations = () => {
    for (const key in contactData) {
      if (!contactData[key].isValid || contactData[key].value === "") {
        alert("Not all questions are correctly completed");
        return;
      }
    }
    navigate("/Lifestyle"); // Navigate to the next page if all fields are valid
  };

  return (
    <div>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={contactData.firstName.value}
          onChange={(event) =>
            handleContactData("firstName", event.target.value)
          }
        />
      </label>{" "}
      {!contactData.firstName.isValid && (
        <div style={{ color: "red" }}>Invalid first name!</div>
      )}
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={contactData.lastName.value}
          onChange={(event) =>
            handleContactData("lastName", event.target.value)
          }
        />
      </label>{" "}
      {!contactData.lastName.isValid && (
        <div style={{ color: "red" }}>Invalid last name!</div>
      )}
      <br />
      <label>
        Date of Birth:
        <DatePicker
          selected={
            contactData.dateOfBirth.value
              ? new Date(contactData.dateOfBirth.value)
              : new Date("01/01/1980")
          }
          onChange={(date) => handleContactData("dateOfBirth", date)}
          dateFormat="MM/dd/yyyy"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
        />
      </label>
      {!contactData.dateOfBirth.isValid && (
        <div style={{ color: "red" }}>Invalid date of birth</div>
      )}
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={contactData.phoneNumber.value}
          onChange={(event) =>
            handleContactData("phoneNumber", event.target.value)
          }
        />
      </label>{" "}
      {!contactData.phoneNumber.isValid && (
        <div style={{ color: "red" }}>Invalid phone number</div>
      )}
      <br />
      <label>
        Email Address:
        <input
          type="text"
          name="email"
          value={contactData.email.value}
          onChange={(event) => handleContactData("email", event.target.value)}
        />
      </label>{" "}
      {!contactData.email.isValid && (
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
