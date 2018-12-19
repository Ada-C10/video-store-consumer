import React, { Component } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import PropTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      movies: [],
      message: "",
    };
  }

  movieSearch = () => {
    this.changeMessage(`Searching for ${this.state.searchTerm}...`)
    const url =
      "http://localhost:3000/movies?query=" +
      `${this.state.searchTerm}`;

    axios
      .get(url)
      .then(response => {
        const movies = response.data.map(movie => {
          return {...movie};
        });

        this.setState({ movies });
        this.changeMessage(`Found ${movies.length} results for ${this.state.searchTerm}.`)
      })
      .catch(error => {
        const errorMessage = error.message;
        this.changeMessage({ errorMessage });
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

  changeMessage = (message) => {
    this.setState({message});
    setTimeout(() => this.setState({message: ""}), 2500)
  }

  render() {
    return (
      <section>
        <h2>{this.state.message}</h2>
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
