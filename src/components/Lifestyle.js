import React, { useState } from "react";
import { Link } from "react-router-dom";

function Lifestyle() {
  const [lifestyleData, setLifestyleData] = useState({
    isExercise: null,
    minWk: null,
    exTypes: null,
    isSex: null,
    isSexQ: null,
    sexQ: null,
  });

  const handleOptionChange = (name, value) => {
    setLifestyleData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <div>
        <p>Do you exercise?</p>
        <label>
          <input
            type="radio"
            name="isExercise"
            value="yes"
            checked={lifestyleData.isExercise === "yes"}
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
            checked={lifestyleData.isExercise === "no"}
            onChange={(event) =>
              handleOptionChange("isExercise", event.target.value)
            }
          />
          No
        </label>

        {lifestyleData.isExercise === "yes" && (
          <div>
            <p>How many hours per week do you exercise?</p>
            <label>
              <input
                type="number"
                name="minWk"
                value={lifestyleData.minWk}
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
                value={lifestyleData.exTypes}
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
            checked={lifestyleData.isSex === "yes"}
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
            checked={lifestyleData.isSex === "no"}
            onChange={(event) =>
              handleOptionChange("isSex", event.target.value)
            }
          />
          No
        </label>

        {lifestyleData.isSex === "yes" && (
          <div>
            <p>Do you have any concerns or questions?</p>
            <label>
              <input
                type="radio"
                name="isSexQ"
                value="yes"
                checked={lifestyleData.isSexQ === "yes"}
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
                checked={lifestyleData.isSexQ === "no"}
                onChange={(event) =>
                  handleOptionChange("isSexQ", event.target.value)
                }
              />
              No
            </label>
            {lifestyleData.isSexQ === "yes" && (
              <div>
                <label>
                  <input
                    type="text"
                    placeholder="list concerns here"
                    name="sexQ"
                    value={lifestyleData.sexQ}
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
        <Link to="/Drugs">Next</Link>
      </div>
    </div>
  );
}

export default Lifestyle;
