import React from "react";
import Logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";

const SignInHeader = () => {
  const history = useHistory();
  return (
    <img
      src={Logo}
      alt="logo"
      width={60}
      height={60}
      style={{ position: "absolute", top: 30, left: 30, cursor: "pointer" }}
      onClick={() => history.push("/")}
    />
  );
};

export default SignInHeader;
