import React from "react";
import Button from "../Button";

const Board = ({ board }) => {
  console.log(board);
  return (
    <div
      className="d-flex card align-items-center justify-content-between p-10 bb-1 b-color-black-opacity-1"
      key={board.id}
    >
      <div className="font-weight-400">{board.name}</div>
      <Button
        filled={false}
        color={"purple"}
        title={"Leave"}
        className={"more"}
      />
    </div>
  );
};

export default Board;
