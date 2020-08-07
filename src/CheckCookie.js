import React from "react";
import { Redirect } from "react-router-dom";

const CheckCookie = ({ children }) => {
  const check = () =>
    document.cookie
      .split(";")
      .map((cookie) => cookie.search("token="))
      .find((e) => e === 1) === 1;
  return check() ? { children } : <Redirect to="sign-in" />;
};

export default CheckCookie;
