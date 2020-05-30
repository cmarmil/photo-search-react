import React from 'react';
import SearchInput from './searchInput.js';
import Header from './Header.js'
import SearchResults from './searchResults';
import './App.css';


class PhotoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.state = {
      searchResults: null,
      error: null
    }
  }

  updateSearchResults(searchResults, errorType) {
    this.setState({
      searchResults: searchResults,
      error: errorType
    })
  }

  displayErrorMsg() {
    if (this.state.error === 'noResults') {
      return (<div className='errorMsg'>Oops! It looks like there aren't any results for this search. Try again with a different term.</div>)
    } else {
      return (<div className='errorMsg'>Oops! Something went wrong on our end. Please try again.</div>)
    }
  }

  render() {
    return (
     <div className='App'>
     <Header></Header>
     <SearchInput updateSearchResults={this.updateSearchResults}></SearchInput>
     {this.state.searchResults ? <SearchResults currentResults={this.state.searchResults}></SearchResults> : null}
     {this.state.error ? this.displayErrorMsg() : null}
     </div>
    );
  }
}

export default PhotoSearch;
