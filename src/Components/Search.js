import React from 'react';
import './Search.css';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ""
    }
  }
  render() {
    return (
      <div >
        <section className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Search by Movie Title"
            onKeyPress={this.handleKeyInput}
            />
        </section>
        <h1>
          You are in Search!
        </h1>
      </div>
    );
  }
}

export default Search;
