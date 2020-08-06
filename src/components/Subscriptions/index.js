import React, { useEffect } from "react";
import Board from "./Board";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptions } from "../../store/actions/Board";
import { useLocation } from "react-router-dom";
const Subscriptions = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const subscriptions = useSelector((store) => store.subscriptions);
  useEffect(() => {
    dispatch(getSubscriptions());
  }, [location]);
  return (
    <>
      <div className="d-flex justify-content-center bg-white p-10">
        <div className="color-dark font-style-monospace font-size-20">
          Subscriptions
        </div>
      </div>

      <div className="b-color-black-opacity-1 mb-20">
        {!subscriptions.isFetching && subscriptions.data?.length > 0 ? (
          subscriptions.data.map((board) => <Board board={board} />)
        ) : (
          <div className="bg-dark-opacity-75-hover bg-dark-opacity-75 p-10">
            You are not subscribed to any board
          </div>
        )}
      </div>
    </>
  );
};

export default Subscriptions;
