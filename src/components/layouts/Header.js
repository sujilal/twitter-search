import React, { useContext } from "react";
import Timer from "react-compound-timer";

import TwitterContext from "../../context/twitter/twitterContext";

const Header = () => {
  const twitterContext = useContext(TwitterContext);
  const { results } = twitterContext;

  return (
    <div>
      <nav className="container navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
        <a href="demo" className="navbar-brand">
          Search @ Twitter
        </a>

        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              {results.length > 0 ? (
                <p>
                  Auto refresh in{" "}
                  <span>
                    {" "}
                    <Timer initialTime={1}>
                      <Timer.Seconds />
                    </Timer>
                  </span>{" "}
                  Seconds
                </p>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
