import React from "react";

const Board = ({ board, setBoard }) => {
  let genBoard = (
    <div style={{}}>
      {[...Array(board.length)].map((_, j) => {
        return (
          <div key={j} style={{ display: "flex" }}>
            {[...Array(board[j].length)].map((_, i) => {
              return (
                <div
                  key={i}
                  onClick={() => change(j, i)}
                  style={{
                    height: 50,
                    width: 50,
                    cursor: "pointer",
                    border: "1px solid #000000",
                    backgroundColor: board[j][i] === 0 ? "#00FF00" : "#FFFF00"
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );

  const change = (i, j) => {
    var gameBoard = board.map(function (arr) {
      return arr.slice();
    });
    gameBoard[i][j] = -gameBoard[i][j] + 1;
    setBoard(gameBoard);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "50px 0" }}
    >
      {genBoard}
    </div>
  );
};

export default Board;
