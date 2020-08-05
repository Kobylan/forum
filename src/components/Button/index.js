import React from "react";

const Button = ({
  color,
  title,
  onClick,
  uppercase,
  filled = true,
  className,
}) => {
  return (
    <div
      className={`${className} font-style-monospace line-height-1 cursor-pointer button${
        filled ? "-filled" : ""
      }__${color} ${uppercase ? "text-uppercase" : ""}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;
