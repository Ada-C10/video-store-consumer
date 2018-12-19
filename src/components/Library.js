import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

const ADD_URL = "http://localhost:3000/movies?"

class Library extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      errorMessages: []
    };
  }

  componentDidMount() {
    // const key = "62ef95dcbf154f7ee0081ff91b30f3d5";
    // const query = "edward scissorhands"
    // console.log("https://api.themoviedb.org/3")

    const GET_ALL_MOVIES = "http://localhost:3000/movies";

    axios.get(GET_ALL_MOVIES)
    .then((response) => {
      this.setState({ movies: response.data });
    })
    .catch((error) => {
      this.setState({
        errorMessages: [...this.state.errorMessages, error.message]
      });
    });
  }

  render() {
    console.log(this.state.movies);

    const loadMovies = this.state.movies.map((movie, i) => {

      return <Movie
                    key={movie.id}
                    title={movie.title}
                    image={movie.image_url}
                    overview={movie.overview}
                    release={movie.release_date}
             />

    })
    return (
      <div>
        {loadMovies}
      </div>
    )
  }
}

export default Library;
