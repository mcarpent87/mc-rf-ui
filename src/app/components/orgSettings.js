import React from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";

const OrgSettings = () => {
  return (
    <div className="org-settings-container">
      <div className="col column1">
        <div className="image-wrapper">
          <img src="/person_portal.svg" alt="Mountains" />
        </div>
        <div className="text-wrapper">
          <p className="org-settings-title">Org Settings</p>
        </div>
      </div>
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </div>
  );
};

export default OrgSettings;
