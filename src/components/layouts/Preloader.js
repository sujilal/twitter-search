import React, { Fragment } from "react";
import preloader from "./Preloader.gif";

const Preloader = () => (
  <Fragment>
    <img
      src={preloader}
      alt="Loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Preloader;
