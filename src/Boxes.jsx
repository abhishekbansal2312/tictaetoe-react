import React from "react";

export default function Boxes({ value, index, handleClick }) {
  return (
    <button
      style={{
        height: "60px",
        width: "60px",
        fontSize: "24px",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "#f0f0f0",
        border: "2px solid #000",
      }}
      onClick={() => handleClick(index)}
    >
      {value}
    </button>
  );
}
