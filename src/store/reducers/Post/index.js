export const postReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_POST_FETCHING":
      return { isFetching: true };
    case "GET_POST_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_POS_ERR":
      return { isFetching: false, error: action.error };
    default:
      return state;
  }
};
