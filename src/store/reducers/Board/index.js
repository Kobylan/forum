export const boardReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_BOARD_FETCHING":
      return { isFetching: true };
    case "GET_BOARD_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_BOARD_ERR":
      return { isFetching: false, error: action.error };
    default:
      return state;
  }
};
