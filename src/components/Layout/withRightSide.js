import React from "react";
import RightSide from "../RightSide";

const WithRightSide = ({ children }) => {
  return (
    <>
      {children}
      <div className="w-100 max-width-350">
        <RightSide />
      </div>
    </>
  );
};

export default WithRightSide;
