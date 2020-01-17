import React from "react";
import PropTypes from "prop-types";

const ResultItem = ({
  data: { name, text, created_at, profile_image_url }
}) => {
  return (
    <div>
      <div className="container">
        {/* List with Avatar Card */}
        <div className="card pmd-card">
          {/* List */}
          <ul className="list-group pmd-list">
            <li className="list-group-item d-flex flex-row">
              {/* Avatar */}
              <a href="demo" className="pmd-avatar-list-img">
                <img
                  alt="Profile"
                  data-src="holder.js/40x40"
                  className="img-fluid"
                  src={profile_image_url}
                  data-holder-rendered="true"
                />
              </a>
              {/* Body */}
              <div className="media-body">
                <h3 className="pmd-list-title">
                  <span>{name}</span>
                  {""}
                  <span className="margin-left">{text}</span>
                  {""}
                  <span className="margin-left">{created_at}</span>
                </h3>
                <p className="pmd-list-subtitle">{text}</p>
              </div>
            </li>
          </ul>
        </div>

        {/* <div className="card flex-row flex-wrap">
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
        </div> */}
      </div>
    </div>
  );
};

ResultItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResultItem;
