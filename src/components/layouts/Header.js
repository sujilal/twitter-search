import React, { useContext } from "react";
import Timer from "react-compound-timer";
import TwitterContext from "../../context/twitter/twitterContext";

const Header = () => {
  const twitterContext = useContext(TwitterContext);
  const { loading } = twitterContext;

  return (
    <div>
      <nav className="container navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
        <a href="demo" className="navbar-brand">
          Search @ Twitter
        </a>

        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <p>
                Auto refresh in{" "}
                {!loading ? (
                  <span>
                    <Timer initialTime={30000} direction="backward">
                      <Timer.Seconds onReset />
                    </Timer>
                  </span>
                ) : (
                  " 0 "
                )}{" "}
                {""}
                Seconds
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
