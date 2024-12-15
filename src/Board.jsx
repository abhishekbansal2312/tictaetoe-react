import React from "react";
import Boxes from "./Boxes";

export default function Board({ array, handleClick }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 60px)",
        gap: "10px",
        justifyContent: "center",
        margin: "20px auto",
      }}
    >
      {array.map((value, index) => (
        <Boxes
          key={index}
          value={value}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
