import React, { useEffect } from "react";
import Tag from "./Tag";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/actions/Categories";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <div className="br-1 bt-1 bl-1 b-color-black-opacity-1 mb-20">
        <div className="d-flex justify-content-center bg-white p-10">
          <div className="color-dark font-style-monospace font-size-20">
            Categories
          </div>
        </div>
        {!categories.isFetching &&
          categories.data.map((category) => <Tag category={category} />)}
      </div>
    </>
  );
};

export default Categories;
