import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Search.css';


class Search extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <form className="movie-search-form">
          <div className="movie-search-form-container">
            <label htmlFor="searchQuery"></label>
            <input name="query" placeholder="Search by Movie"/>
          </div>
        </form>
      </div>
      )
  }

}

export default Search;
