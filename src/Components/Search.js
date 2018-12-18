import React from 'react';
// import './RecentSubmission.css';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: "",
      movies: []
    }
  }
  render() {
    return (
      <div >
        <h1>
          You are in Home!
        </h1>
      </div>
    );
  }
}

export default Search;
