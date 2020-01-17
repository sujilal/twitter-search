import { SEARCH_KEYWORD, SET_LOADING, CLEAR_RESULTS } from "../twitter/types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_KEYWORD:
      return {
        ...state,
        results: action.payload,
        loading: false
      };

    case CLEAR_RESULTS:
      return {
        ...state,
        results: [],
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
