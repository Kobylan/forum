export const commentariesReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_COMMENTARIES_FETCHING":
      return { isFetching: true };
    case "GET_COMMENTARIES_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_COMMENTARIES_ERR":
      return { isFetching: false, error: action.error };
    case "SET_COMMENTARIES_LIKE":
      return {
        ...state,
        data: { ...state.data, likes: state.data.likes + action.payload },
      };
    case "SET_COMMENTARIES_DISLIKE":
      return {
        ...state,
        data: { ...state.data, dislikes: state.data.dislikes + action.payload },
      };
    default:
      return state;
  }
};
