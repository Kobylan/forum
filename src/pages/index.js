import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Posts from "../components/Posts";

const Feed = () => {
  const [active, setActive] = useState("Popular");

  return (
    <div className="d-flex flex-column max-width-800 pb-20 w-100">
      <Navigation active={active} setActive={setActive} />
      <Posts active={active} />
    </div>
  );
};

export default Feed;
