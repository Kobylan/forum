import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBoard } from "../../store/actions/Board";
import Card from "../../components/Card";
import "./index.scss";
import { Join, Leave } from "../../store/actions/JoinOrLeave";
const Board = () => {
  const dispatch = useDispatch();
  const board = useSelector((store) => store.board);
  const [subscribed, setSubscribed] = useState();
  useEffect(() => {
    setSubscribed(board.data?.board.is_subscribed);
  }, [board]);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getBoard(id));
  }, [id]);
  console.log(subscribed);
  return (
    !board.isFetching && (
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between font-style-monospace align-items-center b-1 b-color-gray p-15 mb-20">
          <div className="font-size-24">{board.data.board.name}</div>
          <div
            className={`text-uppercase cursor-pointer color-${
              subscribed ? "red" : "green"
            }`}
            onClick={() => {
              subscribed ? Leave(id) : Join(id);
              setSubscribed(!subscribed);
            }}
          >
            {subscribed ? "Leave" : "Join"}
          </div>
        </div>
        <div className="mb-20">
          <div className="bg-dark-opacity-75-hover bg-dark-opacity-75 d-flex align-items-center">
            <div className="p-10 text-hover cursor-pointer">Hot</div>
            <div className="p-10 text-hover cursor-pointer">New</div>
            <input
              className="board_filter__input m-10"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
        {board.data.posts.length > 0
          ? board.data.posts.map((post) => <Card post={post} />)
          : "This board has no posts"}
      </div>
    )
  );
};

export default Board;
