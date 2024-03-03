import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <div className="container">
        <div className="col column1">
          <div className="image-wrapper">
            <img src="/logo_mountains.svg" alt="Mountains" />
          </div>
          <div className="text-wrapper">
            <p className="title">{title}</p>
            <p className="subtitle">
              December 15th <br /> Lehi, Utah
            </p>
          </div>
        </div>
        <div className="column2">
          <button className="editBtn">Edit event</button>
        </div>
      </div>

      <div className="full-width-row">
        <h3>Event Setup Guide</h3>
        <p className="header-subtext">
          See the available list of modules below. We suggest that you start
          with the attendee module.
        </p>
      </div>
    </>
  );
};

export default Header;
