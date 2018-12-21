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
      errors: undefined
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
    this.setState({
      errorMessage: `Unable to view movies: ${error.message}`,
    })

    this.props.errorCatcherCallback(this.state.errors)

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
    <div>
      <div className="card-group">
        {movies}
      </div>
    </div>
  )
}

}

RentalLibrary.propTypes = {
  updatedMovieCallback: PropTypes.func,
  errorCatcherCallback: PropTypes.func,
};

export default RentalLibrary;
