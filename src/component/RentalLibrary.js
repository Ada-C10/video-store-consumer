import React, { Component } from 'react';
import Movies from './Movies'

import axios from 'axios';

const URL = "http://localhost:3000"

class RentalLibrary extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

componentDidMount() {
  axios.get(URL)
  .then((response) => {
    console.log(response);
    const movies = response.data.map((movie) => {
      return movie
    })
    this.setState({
      movies: movies,
    })
    console.log(this.state.movies)
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
    return <Movies
      key={i}
      id={movie.id}
      title={movie.title}
      overview={movie.overview}
      releaseDate={movie.release_date}
      image={movie.image_url}
     />
    })

  return (
    <div>
    {movies}
    </div>
  )
}

}

// Board.propTypes = {
//   url: PropTypes.string.isRequired,
//   boardName: PropTypes.string.isRequired,
// };

export default RentalLibrary;
