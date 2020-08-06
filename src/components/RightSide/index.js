import React from "react";
import Categories from "../Categories";
import Footer from "../Footer";
import Subscriptions from "../Subscriptions";
import { useLocation } from "react-router-dom";
import AboutBoard from "../AboutBoard";
const RightSide = () => {
  const location = useLocation().pathname.split("/")[1];
  return (
    <>
      {location === "board" && <AboutBoard />}
      <Categories />
      <Subscriptions />
      <Footer />
    </>
  );
};

export default RightSide;
