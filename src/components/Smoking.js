import React, { useState } from "react";
import db from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

function Smoking() {
  const [formData, setFormData] = useState({
    isSmoker: null,
    isTryingToQuit: null,
    isHarmReduxYes: null,
  });

  const handleOptionChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    // Check if all required fields are filled before submitting
    // if (formData.isSmoker === null || formData.isTryingToQuit === null) {
    //   alert("Please answer all questions before submitting.");
    //   return;
    // }

    // Create "patient" collection
    const patientCollection = collection(db, "patient");

    try {
      // Add the form data to Firestore
      const docRef = await addDoc(patientCollection, formData);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <p>Are you a smoker?</p>
      <label>
        <input
          type="radio"
          name="isSmoker"
          value="yes"
          checked={formData.isSmoker === "yes"}
          onChange={(event) =>
            handleOptionChange("isSmoker", event.target.value)
          }
        />
        Yes
      </label>

      <label>
        <input
          type="radio"
          name="isSmoker"
          value="no"
          checked={formData.isSmoker === "no"}
          onChange={(event) =>
            handleOptionChange("isSmoker", event.target.value)
          }
        />
        No
      </label>

      {formData.isSmoker === "yes" && (
        <div>
          <p>Are you trying to quit?</p>
          <label>
            <input
              type="radio"
              name="isTryingToQuit"
              value="yes"
              checked={formData.isTryingToQuit === "yes"}
              onChange={(event) =>
                handleOptionChange("isTryingToQuit", event.target.value)
              }
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="isTryingToQuit"
              value="no"
              checked={formData.isTryingToQuit === "no"}
              onChange={(event) =>
                handleOptionChange("isTryingToQuit", event.target.value)
              }
            />
            No
          </label>

          {formData.isTryingToQuit === "yes" && (
            <div>
              <p>Do you need assistance in quitting or harm reduction?</p>
              <label>
                <input
                  type="radio"
                  name="isHarmReduxYes"
                  value="yes"
                  checked={formData.isHarmReduxYes === "yes"}
                  onChange={(event) =>
                    handleOptionChange("isHarmReduxYes", event.target.value)
                  }
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="isHarmReduxYes"
                  value="no"
                  checked={formData.isHarmReduxYes === "no"}
                  onChange={(event) =>
                    handleOptionChange("isHarmReduxYes", event.target.value)
                  }
                />
                No
              </label>
            </div>
          )}
        </div>
      )}

      <div>
        <p>Form Data:</p>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Smoking;
