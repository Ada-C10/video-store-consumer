import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const url = "http://localhost:3000/movies";
    axios
      .get(url)
      .then(response => {
        const movies = response.data.map(movie => {
          return { ...movie };
        });

        this.setState({ movies });
        console.log(this.state.movies);
      })
      .catch(error => {
        const errorMessage = error.message;
        this.setState({ errorMessage });
      });
  }

  populateMovies = () => {
    return this.state.movies.map((movie, i) => {
      const newMovie = { ...movie };
      return (
        <Movie
          key={i}
          movie={newMovie}
          setMovieCallback={this.props.setMovieCallback}
        />
      );
    });
  };

  render() {
    return (
      <section>
        <h1> MOVIES PAGE </h1>
        {this.populateMovies()}
      </section>
    );
  }
}

Library.propTypes = {};

export default Library;
