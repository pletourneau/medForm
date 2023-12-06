import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Lifestyle({
  patientData,
  setPatientData,
  handlePatientData,
  updateOverallProgress,
}) {
  const handleOptionChange = (name, value) => {
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    handlePatientData(patientData);
  }, [patientData, handlePatientData]);

  return (
    <div>
      <div>
        <p>Do you exercise?</p>
        <label>
          <input
            type="radio"
            name="isExercise"
            value="yes"
            checked={patientData.isExercise === "yes"}
            onChange={(event) =>
              handleOptionChange("isExercise", event.target.value)
            }
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="isExercise"
            value="no"
            checked={patientData.isExercise === "no"}
            onChange={(event) =>
              handleOptionChange("isExercise", event.target.value)
            }
          />
          No
        </label>

        {patientData.isExercise === "yes" && (
          <div>
            <p>How many hours per week do you exercise?</p>
            <label>
              <input
                type="number"
                name="minWk"
                value={patientData.minWk}
                onChange={(event) =>
                  handleOptionChange("minWk", event.target.value)
                }
              />
            </label>
            <p>What types of exercise?</p>
            <label>
              <input
                type="text"
                name="exTypes"
                placeholder="list exercises here"
                value={patientData.exTypes.value}
                onChange={(event) =>
                  handleOptionChange("exTypes", event.target.value)
                }
              />
            </label>
          </div>
        )}
      </div>
      <div>
        <p>Are you sexually active?</p>
        <label>
          <input
            type="radio"
            name="isSex"
            value="yes"
            checked={patientData.isSex === "yes"}
            onChange={(event) =>
              handleOptionChange("isSex", event.target.value)
            }
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="isSex"
            value="no"
            checked={patientData.isSex === "no"}
            onChange={(event) =>
              handleOptionChange("isSex", event.target.value)
            }
          />
          No
        </label>

        {patientData.isSex === "yes" && (
          <div>
            <p>Do you have any concerns or questions?</p>
            <label>
              <input
                type="radio"
                name="isSexQ"
                value="yes"
                checked={patientData.isSexQ === "yes"}
                onChange={(event) =>
                  handleOptionChange("isSexQ", event.target.value)
                }
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="isSexQ"
                value="no"
                checked={patientData.isSexQ === "no"}
                onChange={(event) =>
                  handleOptionChange("isSexQ", event.target.value)
                }
              />
              No
            </label>
            {patientData.isSexQ === "yes" && (
              <div>
                <label>
                  <input
                    type="text"
                    placeholder="list concerns here"
                    name="sexQ"
                    value={patientData.sexQ.value}
                    onChange={(event) =>
                      handleOptionChange("sexQ", event.target.value)
                    }
                  />
                </label>
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        <Link to="/Contact">Prev</Link>
      </div>
      <div>
        {/* <Link to="/Summary" onClick={() => updateOverallProgress("Summary")}> */}
        <Link to="/Summary">Next</Link>
      </div>
    </div>
  );
}

export default Lifestyle;
