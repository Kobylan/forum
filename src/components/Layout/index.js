import React from "react";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";
import WithRightSide from "./withRightSide";

const Layout = ({ children }) => {
  const pathname = useLocation().pathname.split("/")[1];
  const withRightSide = () => {
    switch (pathname) {
      case "sign-in":
        return false;
      case "profile":
        return false;
      case "post":
        return false;
      default:
        return true;
    }
  };
  return (
    <>
      <Navbar navbar={pathname !== "/sign-in"} />
      <div className="background" />
      <div
        className={`w-100 d-flex justify-content-center ${
          pathname !== "sign-in" && pathname !== "profile" ? "" : "h-100"
        }`}
      >
        <div className="w-100  d-flex max-width-1200 mt-100 justify-content-between">
          {withRightSide() ? <WithRightSide children={children} /> : children}
        </div>
      </div>
    </>
  );
};

export default Layout;
