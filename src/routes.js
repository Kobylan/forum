import React, { lazy, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import EditPost from "./pages/EditPost";

const Routes = () => {
  const Feed = lazy(() => import("./pages"));
  const SignIn = lazy(() => import("./pages/signIn"));
  const Post = lazy(() => import("./pages/Post"));
  const Board = lazy(() => import("./pages/Board"));
  const Category = lazy(() => import("./pages/Category"));
  const CreatePost = lazy(() => import("./pages/CreatePost"));
  const Profile = lazy(() => import("./pages/Profile"));
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
        <Route exact path="/board">
          <Redirect to="/" />
        </Route>
        <Route exact path="/board/:id">
          <Board />
        </Route>
        <Route exact path="/category/:id">
          <Category />
        </Route>
        <Route exact path="/create-post/:id">
          <CreatePost />
        </Route>
        <Route exact path="/edit-post/:id">
          <EditPost />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
