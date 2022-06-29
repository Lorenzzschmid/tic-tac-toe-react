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
  const initialSquares = [null, null, null, null, null, null, null, null, null];
  const [squares, setSquares] = useState(initialSquares);

  const handleClickEvent = (i) => {
    // 1. Make a copy of the squares state array.
    const newSquares = [...squares];
    // 2. Mutate the copy, setting the i-th element to 'X.
    newSquares[i] = "X";
    // 3. Call the setSquares function with the mutated copy.
    setSquares(newSquares);
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
