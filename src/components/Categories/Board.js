import React from "react";
import { useHistory } from "react-router-dom";
const Board = ({ board }) => {
  const history = useHistory();
  return (
    <div
      className="ml-10 mb-10 float-left cursor-pointer text-hover"
      key={board.id}
      onClick={() => history.push("/board/" + board.id)}
    >
      {board.name}
    </div>
  );
};

export default Board;
