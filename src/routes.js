import React, { lazy, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import EditPost from "./pages/EditPost";
import CheckCookie from "./CheckCookie";

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
          <CheckCookie>
            <Feed />
          </CheckCookie>
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/post">
          <CheckCookie>
            <Redirect to="/" />
          </CheckCookie>
        </Route>
        <Route exact path="/post/:id">
          <CheckCookie>
            <Post />
          </CheckCookie>
        </Route>
        <Route exact path="/board">
          <Redirect to="/" />
        </Route>
        <Route exact path="/board/:id">
          <CheckCookie>
            <Board />
          </CheckCookie>
        </Route>
        <Route exact path="/category/:id">
          <CheckCookie>
            <Category />
          </CheckCookie>
        </Route>
        <Route exact path="/create-post/:id">
          <CheckCookie>
            <CreatePost />
          </CheckCookie>
        </Route>
        <Route exact path="/edit-post/:id">
          <CheckCookie>
            <EditPost />
          </CheckCookie>
        </Route>
        <Route exact path="/profile">
          <CheckCookie>
            <Profile />
          </CheckCookie>
        </Route>
        <Route>
          <CheckCookie>
            <div />
          </CheckCookie>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
