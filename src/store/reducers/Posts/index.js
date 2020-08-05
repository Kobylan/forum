export const postsReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_POSTS_FETCHING":
      return { isFetching: true };
    case "GET_POSTS_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_POST_ERR":
      return { isFetching: false, error: action.error };
    default:
      return state;
  }
};
