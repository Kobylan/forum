import React from "react";
import Off from "./icons/off";
import "./index.scss";
import Time from "./icons/time";
import Arrow from "./icons/arrow";
import ThumbUp from "./icons/thumb-up";
import ThumbDown from "./icons/thumb-down";
import Comment from "./icons/comment";
import DropDown from "./icons/dropDown";
const Icon = ({ name, className, onClick, ...props }) => {
  const getIcon = () => {
    switch (name) {
      case "off":
        return <Off {...props} />;
      case "time":
        return <Time {...props} />;
      case "arrow":
        return <Arrow {...props} />;
      case "thumb-up":
        return <ThumbUp {...props} />;
      case "thumb-down":
        return <ThumbDown {...props} />;
      case "comment":
        return <Comment {...props} />;
      case "drop-down":
        return <DropDown {...props} />;
      default:
        return;
    }
  };
  if (onClick) {
    return (
      <div
        onClick={onClick}
        className={`svg-hover cursor-pointer ${className}`}
      >
        {getIcon()}
      </div>
    );
  } else {
    return <div className={className}>{getIcon()}</div>;
  }
};

export default Icon;
