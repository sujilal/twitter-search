import React, { useReducer } from "react";
import axios from "axios";
import TwitterContext from "./twitterContext";
import TwitterReducer from "./twitterReducer";
import { GET_POSTS, SEARCH_KEYWORD, SET_LOADING } from "../twitter/types";

const TwitterState = props => {
  const initialState = {
    posts: [],
    loading: false
  };

  const [state, dispatch] = useReducer(TwitterReducer, initialState);

  // Get Posts
  const getPosts = async () => {
    setLoading();
    const res = await axios.get(
      `https://aravindtwitter.herokuapp.com/twittersearch?key=adobe`
    );
    dispatch({
      type: GET_POSTS,
      payload: res.data.statuses
    });
    setTimeout(() => getPosts(), 30000);
  };

  // Search Posts
  const searchPosts = async text => {
    setLoading();
    const res = await axios.get(
      `https://aravindtwitter.herokuapp.com/twittersearch?key=${text}`
    );

    dispatch({
      type: SEARCH_KEYWORD,
      payload: res.data.statuses
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TwitterContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading,
        getPosts,
        searchPosts,
        setLoading
      }}
    >
      {props.children}
    </TwitterContext.Provider>
  );
};

export default TwitterState;
