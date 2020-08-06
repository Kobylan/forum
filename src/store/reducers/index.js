import { combineReducers } from "redux";
import { postsReducer } from "./Posts";
import { categoriesReducer } from "./Categories";
import { subscriptionsReducer } from "./Subscriptions";
import { postReducer } from "./Post";
import { boardReducer } from "./Board";
import { notificationsReducer } from "./Notifications";
import { categoryReducer } from "./Category";
import { profileReducer } from "./Profile/profileReducer";
import { myPostReducer } from "./Profile/posts";
import { myCommentsReducer } from "./Profile/commenst";

export const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  categories: categoriesReducer,
  subscriptions: subscriptionsReducer,
  board: boardReducer,
  notifications: notificationsReducer,
  category: categoryReducer,
  myProfile: profileReducer,
  myComments: myCommentsReducer,
  myPost: myPostReducer,
});
