import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Search.css';


class Search extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
    }
  }

  onInputChange = (event) => {
    console.log(`User changed input to ${event.target.value}`);

    this.setState({
     query: event.target.value,
   });
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`User searched for ${this.state.query}`);
  }


  render () {
    return (
      <div>
        <form className="movie-search-form" onSubmit={this.onSearchSubmit}>
          <div className="movie-search-form-container">
            <label htmlFor="searchQuery"></label>
            <input name="query" placeholder="Search by Movie"
                onChange={this.onInputChange}
                />
          </div>
        </form>
      </div>
      )
  }

}

export default Search;
