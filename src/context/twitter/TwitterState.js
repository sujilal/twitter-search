import React, { useReducer } from "react";
import axios from "axios";
import TwitterContext from "./twitterContext";
import TwitterReducer from "./twitterReducer";
import { SEARCH_KEYWORD, SET_LOADING, CLEAR_RESULTS } from "../twitter/types";

const TwitterState = props => {
  const initialState = {
    results: [],
    loading: false
  };

  const [state, dispatch] = useReducer(TwitterReducer, initialState);

  // Search Data
  const twitterSearch = async text => {
    setLoading();
    const res = await axios.get(
      `https://aravindtwitter.herokuapp.com/twittersearch?key=${text}`
    );

    dispatch({
      type: SEARCH_KEYWORD,
      payload: res.data.statuses
    });
    setTimeout(() => dispatch({ type: CLEAR_RESULTS }), 30000);
  };

  // Clear Results
  const clearResults = () => {
    dispatch({ type: CLEAR_RESULTS });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TwitterContext.Provider
      value={{
        results: state.results,
        loading: state.loading,
        twitterSearch,
        clearResults
      }}
    >
      {props.children}
    </TwitterContext.Provider>
  );
};

export default TwitterState;
