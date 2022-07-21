import React, { useState, useEffect } from "react";
import "./style.css";

function DropDowner() {
  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (value) => {
    setDropdownValue(value);
    setDropdownState(!dropdownState);
  };

  return (
    <div className="container">
      <div className={`dropdown`}>
        <button onClick={handleDropdownClick} className="dropdown-btn">
          {dropdownValue === "" ? "EN" : dropdownValue}
        </button>
        <div
          className={`dropdown-items ${
            dropdownState ? "isVisible" : "isHidden"
          }`}
        >
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("EN")}
            >
              EN
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("RU")}
            >
              RU
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("UZ")}
            >
              UZ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDowner;
