import React, { Component } from 'react';
import PropTypes from 'prop-types'
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

// onAddRental = (movie) => {
//   <CheckOut currentMovie={movie}/>
//   console.log(movie)
// }




render() {
  console.log(`I made a bunch of movies rental library component`);
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
      callback={() => this.onAddRental(movie)}
     />
    })

  return (
    <div>
    {movies}
    </div>
  )
}

}

RentalLibrary.propTypes = {
  onAddRental: PropTypes.func,
};

export default RentalLibrary;
