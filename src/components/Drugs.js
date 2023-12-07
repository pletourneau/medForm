import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Drugs({
  patientData,
  setPatientData,
  handlePatientData,
  updateProgress,
}) {
  const handleOptionChange = (name, value) => {
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const goToLifestyle = () => {
    updateProgress(40);
  };

  const goToSummary = () => {
    updateProgress(80);
  };
  useEffect(() => {
    handlePatientData(patientData);
  }, [patientData, handlePatientData]);

  return (
    <div className="q-container">
      <h1>Drug and Alcohol</h1>
      <div className="form-multi">
        <p>Are you a smoker?</p>
        <label>
          <input
            type="radio"
            name="isSmoker"
            value="yes"
            checked={patientData.isSmoker === "yes"}
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
            checked={patientData.isSmoker === "no"}
            onChange={(event) =>
              handleOptionChange("isSmoker", event.target.value)
            }
          />
          No
        </label>
        {patientData.isSmoker === "yes" && (
          <div>
            <p>Are you trying to quit?</p>
            <label>
              <input
                type="radio"
                name="isTryingToQuit"
                value="yes"
                checked={patientData.isTryingToQuit === "yes"}
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
                checked={patientData.isTryingToQuit === "no"}
                onChange={(event) =>
                  handleOptionChange("isTryingToQuit", event.target.value)
                }
              />
              No
            </label>

            {patientData.isTryingToQuit === "yes" && (
              <div>
                <p>Do you need assistance in quitting or harm reduction?</p>
                <label>
                  <input
                    type="radio"
                    name="isHarmReduxYes"
                    value="yes"
                    checked={patientData.isHarmReduxYes === "yes"}
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
                    checked={patientData.isHarmReduxYes === "no"}
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
      </div>
      <div className="form-multi">
        <p>Do you use other drugs?</p>
        <label>
          <input
            type="radio"
            name="isDrugs"
            value="yes"
            checked={patientData.isDrugs === "yes"}
            onChange={(event) =>
              handleOptionChange("isDrugs", event.target.value)
            }
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="isDrugs"
            value="no"
            checked={patientData.isDrugs === "no"}
            onChange={(event) =>
              handleOptionChange("isDrugs", event.target.value)
            }
          />
          No
        </label>

        {patientData.isDrugs === "yes" && (
          <div>
            <label>
              <textarea
                placeholder="list other drugs here"
                name="otherDrugs"
                value={patientData.otherDrugs.value}
                onChange={(event) =>
                  handleOptionChange("otherDrugs", event.target.value)
                }
              />
            </label>
            <p>Are you trying to quit?</p>
            <label>
              <input
                type="radio"
                name="isTryingToQuitDrugs"
                value="yes"
                checked={patientData.isTryingToQuitDrugs === "yes"}
                onChange={(event) =>
                  handleOptionChange("isTryingToQuitDrugs", event.target.value)
                }
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="isTryingToQuitDrugs"
                value="no"
                checked={patientData.isTryingToQuitDrugs === "no"}
                onChange={(event) =>
                  handleOptionChange("isTryingToQuitDrugs", event.target.value)
                }
              />
              No
            </label>

            {patientData.isTryingToQuitDrugs === "yes" && (
              <div>
                <p>Do you need assistance in quitting or harm reduction?</p>
                <label>
                  <input
                    type="radio"
                    name="isHarmReduxYesDrugs"
                    value="yes"
                    checked={patientData.isHarmReduxYesDrugs === "yes"}
                    onChange={(event) =>
                      handleOptionChange(
                        "isHarmReduxYesDrugs",
                        event.target.value
                      )
                    }
                  />
                  Yes
                </label>

                <label>
                  <input
                    type="radio"
                    name="isHarmReduxYesDrugs"
                    value="no"
                    checked={patientData.isHarmReduxYesDrugs === "no"}
                    onChange={(event) =>
                      handleOptionChange(
                        "isHarmReduxYesDrugs",
                        event.target.value
                      )
                    }
                  />
                  No
                </label>
              </div>
            )}
          </div>
        )}
        <div className="nav-links">
          <Link to="/Lifestyle" onClick={goToLifestyle}>
            &#8249; Prev
          </Link>
          <Link to="/Summary" onClick={goToSummary}>
            Next &#8250;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Drugs;
