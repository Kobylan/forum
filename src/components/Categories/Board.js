import React from "react";

const Board = ({ board }) => {
  return (
    <div
      className="ml-10 mb-10 float-left cursor-pointer text-hover"
      key={board.id}
    >
      {board.name}
    </div>
  );
};

export default Board;
