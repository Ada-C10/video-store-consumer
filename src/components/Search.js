import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Result from './Result';
import './Search.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchResults: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.getSearchResults();
  }

  getSearchResults = (searchTerm) => {
    axios.get(`http://localhost:3000/movies?query=${searchTerm}`)
    .then((response) => {
      this.setState({ searchResults: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  onInputChange = (event) => {
    console.log("on input change")
    // event.target.className = ' '
    const field = event.target.name;
    const value = event.target.value;
    console.log(field, value)
    const newState = {}
    newState[field] = value;
    this.setState(newState);
    console.log(this.state.searchTerm)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submit")
    console.log(this.state.searchTerm)

    this.getSearchResults(this.state.searchTerm);
    console.log(this.state.searchResults)
    this.setState({
      searchTerm: ""
    });
  }

  addMovieToLibrary = (movieId) => {
    const addedMovie = this.state.searchResults.find( movie => movie.external_id === movieId)
    console.log(addedMovie)
    const addedMovieData = {
      title: addedMovie.title,
      overview: addedMovie.overview,
      release_date: addedMovie.release_date,
      image_url: addedMovie.image_url,
      external_id: addedMovie.external_id,
      inventory: 10
    }

    axios.post('http://localhost:3000/movies/', addedMovieData)
     .then((response) => {
       console.log(`Sucessfully added ${addedMovieData.title} to rental library with id ${response.data.id}`);
     })
     .catch((error) => {
       console.log(`Error: ${error.message}`);
     })
  }

  render () {

    const searchResults = this.state.searchResults.map((movie, i) => {
      return <Result
        key={i}
        addMovieToLibraryCallback={this.addMovieToLibrary}
        id={movie.external_id}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}
        />
    });

    return (
      <div>
        <form className="search-bar" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Search.."
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.onInputChange}
          />
          <button type="submit" className="search-bar__submit"/>
        </form>
        <div className="searchResults">
          {searchResults}
        </div>
      </div>
    );
  }
}

Search.propTypes = {

};

export default Search;
