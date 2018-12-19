import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import axios from 'axios';
import './MovieList.css';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: "",
      movies: [],
    };
  }

  componentDidMount() {
    axios.get(this.props.URL)
    .then((response) => {

      const movies = response.data.map((movie) => {
        const newMovie = {
          ...movie
        }
        return newMovie
      })

      this.setState({
        movies
      })
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    });
  }



  makeMovieList = (movies) => {
    const moviesList = movies.map((movie) => {
      console.log(movie.customer_id);
      return <li key={movie.id}>
      <Movie
      title={movie.title}
      overview={movie.overview}
      release_date={movie.release_date}
      image_url={movie.image_url}/>
      <button
      onClick ={ () => {this.props.selectMovieCallback(movie)}}
      type="button">Select Movie</button>
      </li>


    });

    return moviesList
  }


  render() {
console.log(this.state);
    return (
      <ul>
      { this.state.movies !== [] && this.makeMovieList(this.state.movies)}
      </ul>
    )
  }
}

MovieList.propTypes = {

};

export default MovieList;
