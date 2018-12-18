import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Movie from './Movie';

class Library extends Component {
  constructor() {
    super();

    this.state = {
      errorMessages: []
    }
  }

  componentDidMount() {

    const GET_MOVIES = `http://localhost:3000/movies`;


    axios.get(GET_MOVIES)
    .then((response) => {

      console.log('in component did mount', response.data);
      this.props.setMovies(response.data);
    })
    .catch((error) => {
      this.setState({
        errorMessages: [...this.state.errorMessages, error.message]
      });
    });
  }

  render () {

    const movieList = this.props.movies.map((movie, i) => {

      return <Movie key = {i} movie={movie} selectMovie={() => {this.props.selectMovie(movie.title)}}
      buttonName="Select Movie"/>

    })

    return (
      <div>
        <h2>Movies</h2>
        {movieList}
      </div>
    )
  }
}

Library.propTypes = {
  selectMovie: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Library;
