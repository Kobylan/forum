import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { Join, Leave } from "../../store/actions/Board";

const Board = ({ board }) => {
  const [subscribed, setSubscribed] = useState(board.is_subscribed);
  const history = useHistory();
  return (
    <div
      className="d-flex card align-items-center justify-content-between p-10 bb-1 b-color-black-opacity-1"
      key={board.id}
    >
      <div
        className="font-weight-400 cursor-pointer"
        onClick={() => history.push("/board/" + board.id)}
      >
        {board.name}
      </div>
      <Button
        filled={false}
        color={"purple"}
        title={subscribed ? "Leave" : "Join"}
        className={"more"}
        onClick={() => {
          subscribed ? Leave(board.id) : Join(board.id);
          setSubscribed(!subscribed);
        }}
      />
    </div>
  );
};

export default Board;
