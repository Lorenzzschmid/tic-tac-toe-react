import React, { useState } from "react";
import "./App.css";

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
};

const Board = () => {
  // const initialSquares = [null, null, null, null, null, null, null, null, null];
  const initialSquares = Array(9).fill(null); //EASIER APPROACH
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);
  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />
    );
  };

  return (
    <div
      style={{
        backgroundColor: "skyblue",
        margin: 10,
        padding: 20,
      }}
    >
      Board
      <div className="board-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="game">
      Game
      <Board />
    </div>
  );
}

export default App;
