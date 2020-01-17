import {
  GET_POSTS,
  SEARCH_KEYWORD,
  SET_LOADING,
  CLEAR_RESULTS,
  POST_ERRORS
} from "../twitter/types";

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };

    case SEARCH_KEYWORD:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
