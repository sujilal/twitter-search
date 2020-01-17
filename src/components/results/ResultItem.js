import React from "react";
import PropTypes from "prop-types";

const ResultItem = ({
  result: { name, text, created_at, profile_image_url }
}) => {
  return (
    <div>
      <div className="container">
        <div className="card flex-row flex-wrap">
          <div className="card-header border-0">
            <img src={profile_image_url} alt="" className="round-img" />
          </div>
          <div className="card-block px-2">
            <div className="card-title">
              <span>{name}</span>
              <span className="span-txt">{text}</span>
              <span className="span-txt">{created_at}"</span>
            </div>
            <p className="card-text">
              The other formats are not so well defined and might be browser
              specific.
            </p>
          </div>
          <div className="w-100" />
        </div>
      </div>
    </div>
  );
};

ResultItem.propTypes = {
  result: PropTypes.object.isRequired
};

export default ResultItem;
