import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import Link from "../Link";
import Board from "./Board";

const Tag = ({ category }) => {
  const [open, setOpen] = useState(false);
  const dropDownStyles = {
    maxHeight: open ? "200px" : "0",
    transition: "max-height .2s ease-in-out",
  };
  return (
    <div className="bb-1 b-color-black-opacity-1 card" key={category.id}>
      <div
        className="d-flex align-items-center justify-content-between p-10 cursor-pointer font-weight-400"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div>{category.name}</div>
        <Icon
          name="drop-down"
          stroke="rgb(204, 204, 204)"
          className={open ? "rotate-0" : "rotate-180"}
        />
      </div>
      <div
        className="overflow-hidden d-flex flex-column"
        style={dropDownStyles}
      >
        <div className="font-weight-400 p-10">
          {category.boards.map((board) => (
            <Board board={board} />
          ))}
        </div>
        <Link
          title="See more"
          className="font-weight-400 pb-10 pl-10"
          link={"/category/" + category.id}
        />
      </div>
    </div>
  );
};

export default Tag;
