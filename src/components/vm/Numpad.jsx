import React, { useState } from "react";
import "./Numpad.css"; // Ensure this file is correctly imported

function Numpad({ onEnter, onDelete, onSubmit }) {
  const [input, setInput] = useState("");

  const handleButtonClick = (button) => {
    if (button === "DEL") {
      setInput((prev) => prev.slice(0, -1)); // Remove last digit
    } else if (button === "OK") {
      onSubmit(input);
      setInput(""); // Clear input after submitting
    } else {
      setInput((prev) => (prev.length < 4 ? prev + button : prev)); // Max 4 digits
    }
  };

  const buttons = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["DEL", "0", "OK"],
  ];

  return (
    <div className="numpad-container">
      {/* Display screen */}
      <div className="display-screen">{input || "----"}</div>

      {/* Numpad buttons */}
      <div className="button-grid">
        {buttons.flat().map((button) => (
          <button key={button} className="numpad-button" onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Numpad;
