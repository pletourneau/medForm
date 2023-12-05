// import React, { useState } from "react";

// function Smoking() {
//   const [isYesSelected, setIsYesSelected] = useState(null);
//   const [isTryingToQuit, setIsTryingToQuit] = useState(null);
//   const [isHarmReduxYes, setIsHarmReduxYes] = useState(null);

//   const handleOptionChange = (value) => {
//     setIsYesSelected(value);
//   };
//   const handleOtherOptionChange = (value) => {
//     setIsTryingToQuit(value);
//   };
//   const handleThirdOptionChange = (value) => {
//     setIsHarmReduxYes(value);
//   };

//   return (
//     <div>
//       <p>Are you a smoker?</p>
//       <label>
//         <input
//           type="radio"
//           name="smokingOption"
//           value="yes"
//           checked={isYesSelected === "yes"}
//           onChange={() => handleOptionChange("yes")}
//         />
//         Yes
//       </label>

//       <label>
//         <input
//           type="radio"
//           name="smokingOption"
//           value="no"
//           checked={isYesSelected === "no"}
//           onChange={() => handleOptionChange("no")}
//         />
//         No
//       </label>

//       {isYesSelected === "yes" ? (
//         <div>
//           <p>Are you trying to quit?</p>
//           <label>
//             <input
//               type="radio"
//               name="quittingOption"
//               value="yes"
//               checked={isTryingToQuit === "yes"}
//               onChange={() => handleOtherOptionChange("yes")}
//             />
//             Yes
//           </label>

//           <label>
//             <input
//               type="radio"
//               name="quittingOption"
//               value="no"
//               checked={isTryingToQuit === "no"}
//               onChange={() => handleOtherOptionChange("no")}
//             />
//             No
//           </label>

//           {isTryingToQuit === "yes" ? (
//             <div>
//               <p>Do you need assistance in quitting or harm reduction??</p>
//               <label>
//                 <input
//                   type="radio"
//                   name="harmRedux"
//                   value="yes"
//                   checked={isHarmReduxYes === "yes"}
//                   onChange={() => handleThirdOptionChange("yes")}
//                 />
//                 Yes
//               </label>

//               <label>
//                 <input
//                   type="radio"
//                   name="harmRedux"
//                   value="no"
//                   checked={isHarmReduxYes === "no"}
//                   onChange={() => handleThirdOptionChange("no")}
//                 />
//                 No
//               </label>
//             </div>
//           ) : null}
//         </div>
//       ) : null}
//     </div>
//   );
// }
// console.log(Smoking);
// export default Smoking;

import React, { useState } from "react";

function Smoking() {
  const [formData, setFormData] = useState({
    isSmoker: null,
    isTryingToQuit: null,
    isHarmReduxYes: null,
  });

  const handleOptionChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
          onChange={() => handleOptionChange("isSmoker", "yes")}
        />
        Yes
      </label>

      <label>
        <input
          type="radio"
          name="isSmoker"
          value="no"
          checked={formData.isSmoker === "no"}
          onChange={() => handleOptionChange("isSmoker", "no")}
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
              onChange={() => handleOptionChange("isTryingToQuit", "yes")}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="isTryingToQuit"
              value="no"
              checked={formData.isTryingToQuit === "no"}
              onChange={() => handleOptionChange("isTryingToQuit", "no")}
            />
            No
          </label>

          {formData.isTryingToQuit === "yes" && (
            <div>
              <p>Do you need assistance in quitting or harm reduction??</p>
              <label>
                <input
                  type="radio"
                  name="isHarmReduxYes"
                  value="yes"
                  checked={formData.isHarmReduxYes === "yes"}
                  onChange={() => handleOptionChange("isHarmReduxYes", "yes")}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="isHarmReduxYes"
                  value="no"
                  checked={formData.isHarmReduxYes === "no"}
                  onChange={() => handleOptionChange("isHarmReduxYes", "no")}
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
    </div>
  );
}

export default Smoking;
