import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ active, setActive }) => {
  return (
    <div className="d-flex mb-20 ">
      <div
        className={`${
          active !== "Popular"
            ? "hover-purple-text cursor-pointer"
            : "bg-purple"
        }
           p-20 w-100 font-size-24 font-style-monospace`}
        style={{ boxShadow: "15px 15px 25px rgba(0, 0, 0, 0.25)" }}
        onClick={() => setActive("Popular")}
      >
        Popular
      </div>
      <div
        className={`${
          active !== "Subscriptions"
            ? "hover-purple-text cursor-pointer"
            : "bg-purple"
        }
           p-20 w-100 font-size-24 font-style-monospace`}
        style={{ boxShadow: "15px 15px 25px rgba(0, 0, 0, 0.25)" }}
        onClick={() => setActive("Subscriptions")}
      >
        Subscriptions
      </div>
    </div>
  );
};

export default Navigation;
