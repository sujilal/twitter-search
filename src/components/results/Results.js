import React, { useContext, useEffect } from "react";
import ResultItem from "./ResultItem";
import TwitterContext from "../../context/twitter/twitterContext";

const Results = () => {
  useEffect(() => {});

  const twitterContext = useContext(TwitterContext);
  const { loading, results } = twitterContext;

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        {results.map(result => (
          <ResultItem key={result.id} result={result} />
        ))}
      </div>
    );
  }
};

export default Results;
