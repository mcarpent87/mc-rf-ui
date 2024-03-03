import React from "react";

const StepThree = () => {
  return (
    <div>
      <header className="step-header">
        <b>Step 3:</b> &nbsp; Design attendee experiences.
      </header>
      <div className="card-step-3">
        <div className="card-container">
          <div className="first-row">
            <div className="icon">
              <img src="/computer.svg" alt="Icon" />
            </div>
            <div>
              <h5 className="step-title">Attendee Portal</h5>
            </div>
          </div>
          <div>
            <p className="step-subtext">
              Manage the portal that attendees will see after they've registered
              for your event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
