import React, { useState } from "react";
import Board from "./Board";

export default function TicTacToe() {
  const [array, setArray] = useState(["", "", "", "", "", "", "", "", ""]);

  const [winner, setWinner] = useState(null);
  const [numberOfTurns, setNumberOfTurns] = useState(9);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newArray) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        newArray[a] &&
        newArray[a] === newArray[b] &&
        newArray[a] === newArray[c]
      ) {
        setWinner(newArray[a]);
        setNumberOfTurns(0);
      }
    }

    if (numberOfTurns === 1) {
      setWinner("Tie");
    }
  };

  const handleClick = (index) => {
    if (array[index] === "" && !winner) {
      const newArray = [...array];
      newArray[index] = numberOfTurns % 2 == 0 ? "O" : "X";
      setArray(newArray);
      setNumberOfTurns((prevTurns) => prevTurns - 1);
      checkWinner(newArray);
    }
  };

  const resetGame = () => {
    setArray(["", "", "", "", "", "", "", "", ""]);

    setWinner(null);
    setNumberOfTurns(9);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Tic Tac Toe</h1>
      <Board array={array} handleClick={handleClick} />
      {winner ? (
        <h2>{winner === "Tie" ? "It's a Tie!" : `Winner: ${winner}`}</h2>
      ) : (
        <h2>Turn: {numberOfTurns % 2 == 0 ? "O" : "X"}</h2>
      )}
      <button
        onClick={resetGame}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {numberOfTurns === 0 ? "Play Again" : "Reset Game"}
      </button>
    </div>
  );
}
