import React from "react";
import Icon from "../Icon";
import { useHistory } from "react-router-dom";

const Link = ({ title, className, link = "#", newTab = false }) => {
  const history = useHistory();
  return (
    <div
      className={`d-flex align-items-start cursor-pointer bb-1 color-purple b-color-purple ${className}`}
      onClick={() => {
        if (newTab) {
          window.open(link);
        } else {
          history.push(link);
        }
      }}
    >
      <Icon name="arrow" className="pr-10 " />
      {title}
    </div>
  );
};

export default Link;
