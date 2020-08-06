import React, { lazy, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Category from "./pages/Category";
import Createpost from "./pages/CreatePost";

const Routes = () => {
  const Feed = lazy(() => import("./pages"));
  const SignIn = lazy(() => import("./pages/signIn"));
  const Post = lazy(() => import("./pages/Post"));
  const Board = lazy(() => import("./pages/Board"));
  return (
    <Suspense fallback={""}>
      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/post">
          <Redirect to="/" />
        </Route>
        <Route exact path="/post/:id">
          <Post />
        </Route>
        <Route exact path="/category">
          <Category />
        </Route>
        <Route exact path="/create-post">
          <Createpost />
        <Route exact path="/board">
          <Redirect to="/" />
        </Route>
        <Route exact path="/board/:id">
          <Board />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
