export const boardReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_BOARD_FETCHING":
      return { isFetching: true };
    case "GET_BOARD_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_BOARD_ERR":
      return { isFetching: false, error: action.error };
    case "SORT_BOARD_BY_HOT":
      const sorted1 = state.data.posts.sort(
        (a, b) => a.likes - a.dislikes < b.likes - b.dislikes
      );
      return {
        ...state,
        sorted: 1,
        data: {
          ...state.data,
          posts: sorted1,
        },
      };
    case "SORT_BOARD_BY_DATE":
      const sorted2 = state.data.posts.sort((a, b) => a.created < b.created);
      return {
        ...state,
        sorted: 2,
        data: {
          ...state.data,
          posts: sorted2,
        },
      };

    default:
      return state;
  }
};
