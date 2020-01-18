import React from "react";
import PropTypes from "prop-types";

const ResultItem = ({ data: { name, text, created_at, user } }) => {
  return (
    <div>
      <div className="container">
        {/* List with Avatar Card */}
        <div className="card pmd-card">
          {/* List */}
          <ul className="list-group pmd-list">
            <li className="list-group-item d-flex flex-row">
              {/* Avatar */}
              <span className="pmd-avatar-list-img">
                <img src={user.profile_image_url} alt="Profile" />
              </span>
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
      </div>
    </div>
  );
};

ResultItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResultItem;
