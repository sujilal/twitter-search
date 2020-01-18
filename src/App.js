import React, { Fragment } from "react";
// Components
import Header from "./components/layouts/Header";
import Search from "./components/results/Search";
import Results from "./components/results/Results";
import TwitterState from "./context/twitter/TwitterState";
import "./App.css";

function App() {
  return (
    <TwitterState>
      <Fragment>
        <div className="container">
          <Header />
          <Search />
          <Results />
        </div>
      </Fragment>
    </TwitterState>
  );
}

export default App;
