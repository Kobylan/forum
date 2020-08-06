import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Posts from "../components/Posts";

const Feed = () => {
  const [active, setActive] = useState("Popular");

  return (
    <>
      <Navigation active={active} setActive={setActive} />
      <Posts active={active} />
    </>
  );
};

export default Feed;
