import React from "react";
import api_info from "./api_info.js";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.submitSearch = this.submitSearch.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.inputRef = React.createRef();
  }

  submitSearch(e) {
    let searchTerm = null;
    if (e.type === "keydown" && e.keyCode != 13) {
      return;
    }
    if (this.inputRef.current.value) {
      searchTerm = this.inputRef.current.value;
      this.fetchResults(searchTerm);
    }
  }

  fetchResults(searchTerm) {
    let searchResults = null;
    let errorType;
    fetch(
      "https://pixabay.com/api/?key=" +
        api_info.key +
        "&safesearch=true&per_page=25&q=" +
        searchTerm
    )
      .then((response) => {
        if (response.status !== 200) {
          errorType = "status";
          return;
        }
        response.json().then((results) => {
          if (results.totalHits === 0) {
            errorType = "noResults";
            searchResults = null;
          } else {
            searchResults = results.hits;
          }
          this.props.updateSearchResults(searchResults, errorType);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }

  render() {
    return (
      <div className="searchForm">
        <input
          ref={this.inputRef}
          className="searchInput"
          placeholder="Search for an image"
          onKeyDown={this.submitSearch}
        ></input>
        <button
          className="searchButton"
          onKeyDown={this.submitSearch}
          onClick={this.submitSearch}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchInput;
