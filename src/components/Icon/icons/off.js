import React from "react";
const Off = ({ fill = "none", stroke = "rgb(204, 204, 204)" }) => {
  return (
    <svg width="19px" viewBox="0 0 130 130">
      <path
        style={{
          transition: "stroke 0.2s ease-out 0s, opacity 0.2s ease-out 0s",
        }}
        fill={fill}
        stroke={stroke}
        strokeWidth="7px"
        d="M85 21.81a51.5 51.5 0 1 1-39.4-.34M64.5 10v51.66"
      />
    </svg>
  );
};

export default Off;
