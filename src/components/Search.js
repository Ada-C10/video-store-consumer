import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';

class Search extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      movies: [],
    }
  }

  movieSearch = () => {
    const url = "http://localhost:3000/movies?query=" + `${this.state.searchTerm}`;
    axios.get(url)
      .then((response) => {
        const movies = response.data.map((movie) => {
          return {...movie};
        })

        this.setState({movies});
        console.log(this.state.movies);

      })
      .catch((error) => {
        const errorMessage = error.message;
        this.setState({errorMessage});
      });

  }

  populateMovies = () => {
    return this.state.movies.map((movie, i) => {
      const newMovie = {...movie};
      return <Movie key={i} movie={newMovie} />
    })
  }

  render() {
    return (

      <section>
        <input
          type="text"
          placeholder="Search..."
          onChange={event => {this.setState({searchTerm: event.target.value})}}
          onKeyPress={event => {if (event.key === 'Enter') {this.movieSearch()}}}
        />
        <h1> MOVIES PAGE </h1>
        {this.populateMovies()}
      </section>
    )
  }

}

Search.propTypes = {

};

export default Search;
