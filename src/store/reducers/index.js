import { combineReducers } from "redux";
import { postsReducer } from "./Posts";
import { categoriesReducer } from "./Categories";
import { subscriptionsReducer } from "./Subscriptions";
import { postReducer } from "./Post";
import { categoryReducer } from "./Category";
import { boardReducer } from "./Board";
import { notificationsReducer } from "./Notifications";

export const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  categories: categoriesReducer,
  subscriptions: subscriptionsReducer,
  category: categoryReducer,
  board: boardReducer,
  notifications: notificationsReducer,
});
