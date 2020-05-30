import React from "react";
const SearchResults = ({ currentResults }) => {
  return (
    <React.Fragment>
      <div className="resultsContainer">
        {currentResults.map((result) => {
          return (
            <img
              className="resultImg"
              key={result.webformatURL}
              src={result.webformatURL}
            ></img>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default SearchResults;

