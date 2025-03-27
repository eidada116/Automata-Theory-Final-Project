import React, { useState } from "react";
import Numpad from "./vm/Numpad";
import Items from "./vm/Items"; // Only keep this if you're actually using Items

function Main() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleEnter = (num) => {
    setInput((prev) => prev + num);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    setMessage(`Entered Code: ${input}`);
    setInput(""); // Clear input after submission
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 bg-gray-100 p-6">
      {/* Display Input */}
      <div className="w-48 h-12 flex items-center justify-center bg-white text-2xl font-semibold rounded-lg shadow-md border border-gray-300">
        {input || "Enter Code"}
      </div>

      {/* Numpad */}
      <Numpad onEnter={handleEnter} onDelete={handleDelete} onSubmit={handleSubmit} />

      {/* Message Output */}
      {message && <p className="text-lg font-medium text-blue-600">{message}</p>}
    </div>
  );
}

export default Main;
