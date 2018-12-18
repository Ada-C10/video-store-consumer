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
      const movieList = response.data.map((movie) => {
        return {
          ...movie
        }
      });
      this.setState({
        movies: movieList,
      });
      console.log(this.state.movies)
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }


  render () {
    const movieList = this.state.movies.map((movie, i) => {
      return <Movie key={i} {...movie} />
    });

    return (
      <div>
        {movieList}
      </div>
    );
  }
}

export default Library;
