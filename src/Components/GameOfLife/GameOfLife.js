import React, { useState, useEffect } from "react";
import Inputs from "./Input";
import Board from "./Board";
import Run from "./Run";

const GameOfLife = () => {
  const [row, setRow] = useState(1);
  const [col, setCol] = useState(1);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    let gameBoard = [];

    for (let i = 0; i < row; i++) {
      gameBoard[i] = [];
      for (let j = 0; j < col; j++) {
        gameBoard[i][j] = 0;
      }
    }
    setBoard(gameBoard);
  }, [row, col]);

  return (
    <>
      <h1>Game of Life</h1>
      <Inputs val={[row, col]} changer={[setRow, setCol]} />
      <Board board={board} setBoard={setBoard} />
      <Run board={board} setBoard={setBoard} />
    </>
  );
};

export default GameOfLife;
