import React, { lazy, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Category from "./pages/Category";
import Createpost from "./pages/CreatePost";

const Routes = () => {
  const Feed = lazy(() => import("./pages"));
  const SignIn = lazy(() => import("./pages/signIn"));
  const Post = lazy(() => import("./pages/Post"));
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
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
