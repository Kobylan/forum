import React from "react";

const Time = ({ fill = "none", stroke = "rgb(255, 255, 102)" }) => {
  return (
    <svg width="21px" viewBox="0 0 130 130">
      <g fill={fill} stroke={stroke} strokeWidth="5px">
        <path d="M97.77 65H65V31.77" />
        <circle cx="65" cy="65" r="53" />
      </g>
    </svg>
  );
};

export default Time;
