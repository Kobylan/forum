import React from "react";
import RightSide from "../RightSide";

const WithRightSide = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-column max-width-800 pb-20 w-100">
        {children}
      </div>
      <div className="w-100 max-width-350">
        <RightSide />
      </div>
    </>
  );
};

export default WithRightSide;
