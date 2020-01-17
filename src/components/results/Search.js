import React, { useState, useContext } from "react";
import TwitterContext from "../../context/twitter/twitterContext";

const Search = () => {
  const twitterContext = useContext(TwitterContext);
  const [text, setText, searchPosts] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      console.log("Please enter something");
    } else {
      twitterContext.searchPosts(text);
      setText("");
    }
  };

  const onChange = e => setText(e.target.value);
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div>
          <div className="search-form">
            <form onSubmit={onSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="text"
                  placeholder="Search"
                  value={text}
                  onChange={onChange}
                  className="form-control input-lg"
                />
                <div className="input-group-btn">
                  <button className="btn btn-lg btn-primary" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
