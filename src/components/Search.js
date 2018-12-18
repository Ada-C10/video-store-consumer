import React, { Component } from "react";
import Movie from "./Movie";
import axios from "axios";
import SearchResult from "./SearchResult";
import PropTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      movies: []
    };
  }

  movieSearch = () => {
    const url =
      "https://api.themoviedb.org/3/search/movie?api_key=027b7f1daa3e60e2d79cf9f745e1940d&query=" +
      `${this.state.searchTerm}`;
    console.log(url);
    axios
      .get(url)
      .then(response => {
        console.log(response);
        const movies = response.data.results.map(movie => {
          return {
            ...movie,
            image_url: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
          };
        });

        this.setState({ movies });
        console.log(this.state.movies);
      })
      .catch(error => {
        const errorMessage = error.message;
        this.setState({ errorMessage });
      });
  };

  populateMovies = () => {
    return this.state.movies.map((movie, i) => {
      const newMovie = { ...movie };
      return (
        <SearchResult
          key={i}
          movie={newMovie}
          addToLibraryCallback={this.props.addToLibraryCallback}
        />
      );
    });
  };

  render() {
    return (
      <section>
        <input
          type="text"
          placeholder="Search..."
          onChange={event => {
            this.setState({ searchTerm: event.target.value });
          }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.movieSearch();
            }
          }}
        />
        <h1> MOVIES PAGE </h1>
        {this.populateMovies()}
      </section>
    );
  }
}

Search.propTypes = {
  addToLibraryCallback: PropTypes.func
};

export default Search;
