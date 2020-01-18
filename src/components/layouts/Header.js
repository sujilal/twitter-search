import React from "react";
import Timer from "react-compound-timer";

const Header = () => {
  const counter = (
    <li className="nav-item">
      <p>
        Auto refresh in{" "}
        <span>
          {" "}
          <Timer initialTime={3000} direction="backward">
            <Timer.Seconds />
          </Timer>
        </span>{" "}
        Seconds
      </p>
    </li>
  );

  return (
    <div>
      <nav className="container navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
        <a href="demo" className="navbar-brand">
          Search @ Twitter
        </a>

        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto ">{counter}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
