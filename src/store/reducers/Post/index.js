export const postReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_POST_FETCHING":
      return { isFetching: true };
    case "GET_POST_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_POST_ERR":
      return { isFetching: false, error: action.error };
    case "SET_POST_LIKE":
      return {
        ...state,
        data: { ...state.data, likes: state.data.likes + action.payload },
      };
    case "SET_POST_DISLIKE":
      return {
        ...state,
        data: { ...state.data, dislikes: state.data.dislikes + action.payload },
      };
    default:
      return state;
  }
};
