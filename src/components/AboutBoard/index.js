import React from "react";
import { useSelector } from "react-redux";
import { getTime } from "../getTime";
import Button from "../Button";
import { useHistory } from "react-router-dom";
const AboutBoard = () => {
  const history = useHistory();
  const board = useSelector((store) => store.board);
  return (
    !board.isFetching && (
      <div className="br-1 bt-1 bl-1 b-color-black-opacity-1 mb-20">
        <div className="d-flex justify-content-center bg-white p-10">
          <div className="color-dark font-style-monospace font-size-20">
            About Community
          </div>
        </div>
        <div className="card">
          <div className="p-10">name: {board.data.board.name}</div>
          <div className="p-10">
            members: {board.data.board.subscriptions_count}
          </div>
          <div className="p-10">author: {board.data.board.author}</div>
          <div className="p-10">
            created: {getTime(board.data.board.created)}
          </div>
          <div className="d-flex justify-content-center p-20">
            <Button
              title="Create post"
              uppercase={true}
              color="gray"
              className="font-size-12 "
              onClick={() =>
                history.push("/create-post/" + board.data.board.id)
              }
            />
          </div>
        </div>
      </div>
    )
  );
};

export default AboutBoard;
