import React from "react";
import SignInHeader from "./SignInHeader";
import Navbar from "./Navbar";

const Index = ({ navbar = true }) => {
  if (navbar) {
    return <Navbar />;
  } else {
    return <SignInHeader />;
  }
};

export default Index;
