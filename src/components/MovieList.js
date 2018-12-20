import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import Rental from './Rental';

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

  componentDidUpdate(prevProps) {
    let movieIndex = null
    if (this.props.movie !== prevProps.movie) {
      const movies = this.state.movies.map((movie, index) => {
        const newMovie = {
          ...movie
        }
        if ( movie.image_url === this.props.movie.image_url){
          movieIndex = index
        }
        return newMovie
      })

      if (movieIndex !== null){
        movies.splice(movieIndex, 1)
      }

      this.setState({
        movies
      })
    }
  }

  makeMovieList = (movies) => {
    const moviesList = movies.map((movie, id) => {
      if (movie.customer_id) {
        const customer = {
          name: movie.name,
          id: movie.customer_id
        }
        return <li key={id} className={"movie-list-li-flex"} >
        <div className={"rental-component-flex"}>
        <Rental
        title={movie.title}
        name={movie.name}
        due_date={movie.due_date}
        image_url={movie.image_url}/>
        </div>
        <div className="rental-button-container">
        <button
        className={"btn btn-secondary btn-lg rental-button-spacing"}
        onClick ={ () => {this.props.selectMovieCallback(movie)}}
        type="button">Select Movie</button>
        <button
        className={"btn btn-secondary btn-lg rental-button-spacing"}
        onClick ={ () => {this.props.selectCustomerCallback(customer)}}
        type="button">Select Customer</button>
        </div>
        </li>
      } else {
        return <li key={id} className={"movie-list-li-flex"}>
        <Movie
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}/>
        <button
        className={"btn btn-secondary btn-lg"}
        onClick ={ () => {this.props.selectMovieCallback(movie)}}
        type="button">Select Movie</button>
        </li>
      }

    });

    return moviesList
  }


  render() {

    return (
      <ul className="text-white bg-dark mb-3 movie-list">
      <h2>{this.state.errorMessage ? this.state.errorMessage: "" }</h2>

      { this.state.movies !== [] && this.makeMovieList(this.state.movies)}
      </ul>
    )
  }
}

MovieList.propTypes = {
  URL: PropTypes.string.isRequired,
  movie: PropTypes.string,
  selectMovieCallback: PropTypes.func.isRequired,
};

export default MovieList;
