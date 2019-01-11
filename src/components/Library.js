import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class Library extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }


  componentDidMount() {
    const GET_ALL_LIBRARY_URL = "http://localhost:3000/movies";
    axios.get(GET_ALL_LIBRARY_URL)
    .then((response) => {
      this.setState({
        movies: response.data,
      });
      this.props.movieCount(this.state.movies.length);
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });

  }



  render() {
    let movieData = this.state.movies;

    const movies = movieData.map((movie, i) => {
      console.log(movie);
      return (
        <Movie
          key={movie.id}
          {...movie}
          movieActionCallback={() => this.props.movieActionCallback(movie)}
          />
      )

    });

    return(
      <div>
        <div className="item-list_container">
            {movies}
        </div>
      </div>
    )
  }



}

export default Library;
