import React from "react";
class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.resultsContainerRef = React.createRef();
        this.state = {
            containerClass : 'hidden'
        }
      }
    
      componentDidMount() {
        this.setState({
            containerClass : 'shown'
        });
      }
    render() {
        return (
            <div className={'resultsContainer ' + this.state.containerClass} ref={this.resultsContainerRef}>
              {this.props.currentResults.map((result) => {
                return <img
                  className="resultImg"
                  key={result.largeImageURL}
                  src={result.largeImageURL}
                ></img>
              })}
            </div>
          );
    }
};

export default SearchResults;
