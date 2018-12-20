import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import axios from 'axios';
import Movie from './Movie';


class Movies extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      query: '',
      buttonLibrary: true,
    };
  };


  searchMovie = (queryInput) => {
    console.log(queryInput.query);
    const url = `http://localhost:3000/movies?query=${queryInput.query}`
    console.log(url);
    axios.get(url)
    .then((response) => {
      console.log(response.data);
      this.setState({
        movies: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error,
      });
    });
    console.log(this.state.movies);
  };


  addToLibrary = (movie) => {
    const url = `http://localhost:3000/movies`;

    axios.post(url, movie)
    .then((response) => {
      console.log(response.data);
       this.props.addMovieStatusCallback(movie)
    })
    .catch((error) => {
      this.setState({
        error: error,
      });
    });

  };


  render() {

    const moviesList = this.state.movies.map((movie, i) => {
      return (
        <Movie
          key={i}
         {...movie}
         movieActionCallback={() => this.addToLibrary(movie)}
         buttonLibrary={this.state.buttonLibrary}
          />
      );
    });

    return(
      <div>
        <h1>Movies</h1>
        <SearchForm searchQueryCallback={this.searchMovie}/>
        <div className="item-list_container">
              {moviesList}
        </div>

      </div>

    );
  }
}

Movies.propTypes = {
  addMovieStatusCallback: PropTypes.func,
};

export default Movies
