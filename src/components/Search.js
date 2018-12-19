import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Search.css';
import SearchHit from './SearchHit';
import axios from 'axios';


class Search extends Component {
  constructor(props) {
    super(props);

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

  searchMovieAPI =(query)=> {
    // const URL = "https://api.themoviedb.org/3/search/movie?api_key=" + `${key}&query=${query}`;
    const URL = "http://localhost:3000/" + `movies?query=${query}`;

    axios.get(URL)
    .then((response) => {
      const searchResultList = response.data.map((hit, i) => {
        return <SearchHit key={i} {...hit} />
      })
      this.setState({searchResults: searchResultList});
        console.log(this.state.searchResults);
    })
    .catch((error) => {
      this.setState({error: error.message})
    })
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`User searched for ${this.state.query}`);
    this.searchMovieAPI(this.state.query);
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
        <div>
          {this.state.searchResults}
        </div>
      </div>
    )
  }

}

export default Search;
