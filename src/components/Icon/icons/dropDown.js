import React from "react";

const DropDown = ({ fill = "none", stroke = "rgb(13, 13, 13)" }) => {
  return (
    <svg width="20" viewBox="0 0 130 130">
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth="3px"
        d="M115 92.26l-50-50-50 50"
      />
    </svg>
  );
};

export default DropDown;
