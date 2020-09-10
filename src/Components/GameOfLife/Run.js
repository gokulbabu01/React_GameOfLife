import React, { useState, useEffect } from "react";

const Run = ({ status, board, setBoard }) => {
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (!running) {
          return;
        }
        setBoard(getNextGeneration(board));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, board, setBoard]);

  const run = async () => {};

  const stop = () => {
    setRunning(false);
  };

  return running ? (
    <button onClick={stop}>Stop</button>
  ) : (
    <button
      onClick={() => {
        setRunning(true);
        run();
      }}
    >
      Start
    </button>
  );
};

const getNextGeneration = (inputGeneration) => {
  let nextGen = inputGeneration.map(function (arr) {
    return arr.slice();
  });
  for (let i = 0; i < inputGeneration.length; i++) {
    for (let j = 0; j < inputGeneration[i].length; j++) {
      let aliveCount = 0;
      for (let l = -1; l <= 1; l++) {
        for (let m = -1; m <= 1; m++) {
          if (
            i + l < 0 ||
            j + m < 0 ||
            i + l >= inputGeneration.length ||
            j + m >= inputGeneration[i].length
          ) {
            continue;
          }
          aliveCount += inputGeneration[i + l][j + m];
        }
      }
      aliveCount -= inputGeneration[i][j];

      if (inputGeneration[i][j] === 1 && aliveCount < 2)
        //live cell with fewer than two live neighbours
        nextGen[i][j] = 0;
      else if (inputGeneration[i][j] === 1 && aliveCount > 3)
        //live cell with more than three live neighbours
        nextGen[i][j] = 0;
      else if (inputGeneration[i][j] === 0 && aliveCount === 3)
        // dead cell with exactly three live neighbours
        nextGen[i][j] = 1;
      else nextGen[i][j] = inputGeneration[i][j];
    }
  }
  return nextGen;
};

export default Run;
