import { combineReducers } from "redux";
import { postsReducer } from "./Posts";
import { categoriesReducer } from "./Categories";
import { subscriptionsReducer } from "./Subscriptions";
import { postReducer } from "./Post";

export const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  categories: categoriesReducer,
  subscriptions: subscriptionsReducer,
});
