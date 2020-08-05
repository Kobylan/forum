import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import Logo from "../../assets/images/logo.png";
import Icon from "../Icon";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();
  return (
    <>
      <div
        className="w-100 position-fixed"
        style={{
          height: "100px",
          background:
            "linear-gradient( to bottom, hsl(0, 0%, 5%) 0%, rgba(0, 0, 0, 0.35) 59%, transparent 100% )",
        }}
      />
      <nav
        className="navbar d-flex w-100 pg-20 position-fixed align-items-center justify-content-between"
        style={{ height: "64px" }}
      >
        <div className="d-flex">
          <img
            src={Logo}
            alt="logo"
            width={35}
            className="mr-20 cursor-pointer"
            onClick={() => history.push("/")}
          />
          <Breadcrumbs />
        </div>
        <div className="d-flex align-items-center">
          <Icon name="time" className="pg-20 br-1 b-color-white" />
          <div className="text-hover cursor-pointer ml-20">Kobylan Gaziz</div>
          <Icon
            onClick={() => {
              history.push("/sign-in");
            }}
            name="off"
            className="ml-20"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
