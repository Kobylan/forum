import React, { useEffect } from "react";
import Board from "./Board";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptions } from "../../store/actions/Subscriptions";

const Subscriptions = () => {
  const dispatch = useDispatch();
  const subscriptions = useSelector((store) => store.subscriptions);
  useEffect(() => {
    dispatch(getSubscriptions());
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center bg-white p-10">
        <div className="color-dark font-style-monospace font-size-20">
          Subscriptions
        </div>
      </div>

      <div className="b-color-black-opacity-1 mb-20">
        {!subscriptions.isFetching &&
          subscriptions.data.map((board) => <Board board={board} />)}
      </div>
    </>
  );
};

export default Subscriptions;
