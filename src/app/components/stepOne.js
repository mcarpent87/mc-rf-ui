import React from "react";

const StepOne = () => {
  return (
    <div>
      <header className="step-header">
        <b>Step 1:</b> &nbsp; Base settings.
      </header>
      <div className="card">
        <div className="card-box">
          <h4>General</h4>
          <p className="step-subtext">Define Attendee types & attributes</p>
        </div>
        <div className="card-box">
          <h4>Title</h4>
          <p className="step-subtext">
            Description that explains the value goes here. Description that
            explains the value goes here.
          </p>
        </div>
        <div className="card-box">
          <h4>Title</h4>
          <p className="step-subtext">
            Description that explains the value goes here. Description that
            explains the value goes here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
