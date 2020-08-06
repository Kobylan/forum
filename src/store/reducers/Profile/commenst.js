export const myCommentsReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_COMMENTS_FETCHING":
      return { isFetching: true };
    case "GET_COMMENTS_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_COMMENTS_ERROR":
      return { isFetching: false, error: action.error };
    default:
      return state;
  }
};
