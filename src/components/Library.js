import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './styles/Library.css';


class Library extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount () {
    const URL = 'http://localhost:3000/movies'

    axios.get(URL)
    .then((response) => {
      const allMovies = response.data.map((movie, i) => {
        return <Movie key={i} message="Select for rental" {...movie}/>
      });
      this.setState({
        movies: allMovies,
      });
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }


  render () {
    return (
      <div className="movie-container">
        {this.state.movies}
      </div>
    );
  }
}

export default Library;
