import React from "react";

const Inputs = ({ val, changer }) => {
 

  const row = val[0];
  const col = val[1];

  const setRow = changer[0];
  const setCol = changer[1];

  const updateRow = (event) => {
    setRow(event.target.value);
  };

  const updateCol = (event) => {
    setCol(event.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <label>Row: </label>
        <input
          value={row}
          placeholder="Enter Number Of Rows"
          onChange={updateRow}
        />
      </div>
      <div>
        <label>Col: </label>
        <input
          value={col}
          placeholder="Enter Number of Columns"
          onChange={updateCol}
        />
      </div>
    </div>
  );
};
export default Inputs;
