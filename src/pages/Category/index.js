import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./index.scss";
import { getCategory } from "../../store/actions/Category";
import Board from "./Board";

const Category = () => {
  const { id } = useParams();
  const category = useSelector((store) => store.category);
  const categoryName = useSelector(
    (store) => store.categories.data?.find((e) => e.id === parseInt(id)).name
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory(id));
  }, [id]);
  return (
    <div className="d-flex flex-column w-100 max-width-800">
      <div className="mb-20 font-size-64 font-style-monospace">
        {categoryName}
      </div>
      <div className=" align-items-center justify-content-center">
        {category.isFetching
          ? "loader"
          : category.data.map((board, index) => (
              <Board board={board} index={index} id={id} />
            ))}
      </div>
    </div>
  );
};

export default Category;
