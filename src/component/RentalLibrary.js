import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './RentalLibrary.css'
import Movies from './Movies'

import axios from 'axios';

const URL = "http://localhost:3000/movies"

class RentalLibrary extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: undefined
    }
  }

componentDidMount() {
  axios.get(URL)
  .then((response) => {
    const movies = response.data.map((movie) => {
      return movie
    })
    this.setState({
      movies: movies,
    })

  })
  .catch((error) => {
    console.log(error.message);
    this.setState({
      error: error.message,
      // add error messages buy mapping through check validations??
    })
  })
}

render() {

  const movies = this.state.movies.map((movie, i) => {
    let title = `Rent ${movie.title}`
    return <Movies
      key={i}
      id={movie.id}
      title={movie.title}
      overview={movie.overview}
      releaseDate={movie.release_date}
      image={movie.image_url}
      button={title}
      callback={()=>this.props.updatedMovieCallback(movie)}
     />
    })

  return (
    <div className="card-group">
      {movies}
    </div>
  )
}

}

RentalLibrary.propTypes = {
  // onAddRental: PropTypes.func,
  updatedMovieCallback: PropTypes.func,
};

export default RentalLibrary;
