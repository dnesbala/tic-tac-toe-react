import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  console.log(squares);

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }
    const newSquares = [...squares];
    newSquares[i] = xTurn ? "X" : "O";
    setSquares(newSquares);
    setXTurn(!xTurn);
  };

  const checkWinner = (squares) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      // winningLines[0] = [0, 1, 2]
      const a = winningLines[i][0]; // index stored : 0
      const b = winningLines[i][1]; // 1
      const c = winningLines[i][2];
      console.log(a, b, c);
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = checkWinner(squares);

  const restartGame = () => {
    setSquares(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      <h2>Tic-Tac-Toe</h2>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      {winner == null
        ? `Next turn : ${xTurn ? "X" : "O"}`
        : `Winner : ${winner}`}
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
};

export default Board;
