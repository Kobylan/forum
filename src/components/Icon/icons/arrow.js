import React from "react";

const Arrow = ({ fill = "none", stroke = "rgb(153, 102, 255)" }) => {
  return (
    <svg width="14" viewBox="0 0 130 130">
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth="10"
        d="M73 18l48 47-48 48M6 65h114"
      />
    </svg>
  );
};

export default Arrow;
