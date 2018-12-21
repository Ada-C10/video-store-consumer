import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import PropTypes from 'prop-types';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      message: "",
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


      })
      .catch(error => {
        const errorMessage = error.message;
        this.changeMessage({ errorMessage });
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

  changeMessage = (message) => {
    this.setState({message});
    setTimeout(() => this.setState({message: ""}), 2500)
  }

  render() {
    return (
      <section>
        <h2 className="message"> {this.state.message} </h2>
        {this.populateMovies()}
      </section>
    );
  }
}

Library.propTypes = {
  setMovieCallback: PropTypes.func,
};

export default Library;
