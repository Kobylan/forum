import React, { useState } from "react";
import { Join, Leave } from "../../store/actions/JoinOrLeave";

const Board = ({ board, index }) => {
  const [subscribed, setSubscribed] = useState(board.is_subscribed);
  return (
    <div>
      <div
        className={`category-item-${
          index % 2 === 0 ? `left` : `right`
        } b-color-white b-1 align-items-center d-flex justify-content-between pg-20 category-item mb-15`}
      >
        <div>{board.name}</div>
        <div
          className={`text-uppercase cursor-pointer color-${
            subscribed ? "red" : "green"
          }`}
          onClick={() => {
            subscribed ? Leave(board.id) : Join(board.id);
            setSubscribed(!subscribed);
          }}
        >
          {subscribed ? "Leave" : "Join"}
        </div>
      </div>
    </div>
  );
};

export default Board;
