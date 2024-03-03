import React, { useState } from "react";

const StepTwo = () => {
  const [registrationWorkflows, setRegistrationWorkflows] = useState([
    {
      title: "Attendee Registration",
      subtext: "Start by creating a general registration workflow",
    },
    {
      title: "Attendee Registration",
      subtext: "Start by creating a general registration workflow",
    },
    {
      title: "Attendee Registration",
      subtext: "Start by creating a general registration workflow",
    },
  ]);

  const addRegistrationWorkflow = () => {
    setRegistrationWorkflows((prevState) => [
      ...prevState,
      {
        title: "Attendee Registration",
        subtext: "Start by creating a general registration workflow",
      },
    ]);
  };
  return (
    <div>
      <header className="step-header">
        <b>Step 2:</b> &nbsp; Build registration workflows.
      </header>
      <div className="container-step-2">
        {registrationWorkflows.map((workflow, index) => (
          <div className="card-step-2" key={index}>
            <div className="first-row">
              <div className="icon">
                <img src="/logic_arrow.svg" alt="Icon" />
              </div>
              <div className="text">
                <h5 className="step-title">{workflow.title}</h5>
              </div>
            </div>
            <div>
              <p className="step-subtext-2">{workflow.subtext}</p>
            </div>
          </div>
        ))}
        <div className="card-step-2" onClick={addRegistrationWorkflow}>
          <img src="/add_circle_outline.svg" alt="Add registration workflow" />
          <p className="card-subtitle">Add registration workflow</p>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
