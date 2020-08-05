import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/actions/Category";
import "./index.scss";

const Category = () => {
  const category = useSelector((store) => store.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory(1));
  }, []);
  console.log(category);
  return (
    <div className="d-flex flex-column w-100 max-width-800">
      <div className="d-flex flex-column">
        <a href="http://localhost:3000/" className="d-flex font-size-16">
          <div className="ml-15">← Back to feed</div>
        </a>
        <div className="category-title">Web</div>
        <div
          className="bt-1 b-color-white pt"
          style={{
            paddingTop: "30px",
          }}
        >
          Web development is the work involved in developing a website for the
          Internet or an intranet. Web development can range from developing a
          simple single static page of plain text to complex web-based internet
          applications (web apps), electronic businesses, and social network
          services.
        </div>
      </div>
      <div
        className=" align-items-center justify-content-center"
        style={{ marginTop: "40px" }}
      >
        {category.isFetching
          ? "loader"
          : category.data.map((e, i) => (
              <div
                className={`category-item-${
                  i % 2 === 0 ? `left` : `right`
                } b-color-white b-1 align-items-center d-flex justify-content-between pg-20 category-item mb-15`}
              >
                <div>{e.name}</div>
                <a
                  className="cursor-pointer text-align-center font-size-16 d-flex"
                  onClick={() => console.log(e.name)}
                >
                  JOIN
                </a>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Category;
