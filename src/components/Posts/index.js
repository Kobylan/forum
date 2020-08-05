import React, { lazy, Suspense } from "react";

const Posts = ({ active }) => {
  const Popular = lazy(() => import("./Popular"));
  const Subscriptions = lazy(() => import("./Subscriptions"));
  const renderPosts = () => {
    switch (active) {
      case "Popular":
        return <Popular />;
      case "Subscriptions":
        return <Subscriptions />;
      default:
        return <div />;
    }
  };
  return <Suspense fallback={""}>{renderPosts()}</Suspense>;
};

export default Posts;
