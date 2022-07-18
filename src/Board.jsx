import React from "react";
import Square from "./Square";

const Board = () => {
  return (
    <div className="board-container">
      <h2>Tic-Tac-Toe</h2>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
