import React, { useContext, useEffect } from "react";
import ResultItem from "./ResultItem";
import Preloader from "../layouts/Preloader";
import TwitterContext from "../../context/twitter/twitterContext";

const Results = () => {
  const twitterContext = useContext(TwitterContext);
  const { posts, getPosts, loading } = twitterContext;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <div>
        {posts.map(data => (
          <ResultItem key={data.id} data={data} />
        ))}
      </div>
    );
  }
};

export default Results;
