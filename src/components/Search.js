import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Search.css';
import axios from 'axios';


class Search extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
      searchResults: [],
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

  componentDidMount(){
    const URL = "https://api.themoviedb.org/3/search/movie?api_key=MOVIEDB_KEY&language=en-US"
    axios.get(URL)
      .then((response) => {
        this.setState({searchResults: response.data
        });
      })
      .catch((error) => {
        this.setState({error: error.message})
      })
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
