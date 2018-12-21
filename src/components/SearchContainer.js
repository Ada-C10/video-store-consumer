import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Search from './Search';
import Movie from './Movie';


const SEARCH_URL = "http://localhost:3000/movies?query="

const ADD_URL = "http://localhost:3000/movies?"

class SearchContainer extends Component {
  constructor () {
    super();

    this.state = {
      movies: [],
    };
  }

  searchMovies = (title) => {


    axios.get(SEARCH_URL + title)
    .then((response) => {
      console.log(response.data);
      this.setState({
        movies: response.data
      })
    })
    .catch((error) => {
      console.log('failure response');
      console.log(error);
    });
  }


  addMovieToLibrary = (movie) => {
    console.log(movie.title)
    console.log(movie.image_url)
    const url = ADD_URL + `title=${movie.title}&overview=${movie.overview}&release_date=${movie.release_date}&image_url=${movie.image_url}&external_id=${movie.external_id}`
    console.log("Movie is being added");
    console.log(url);

    axios.post(url)
    .then((response) => {
      console.log(response.data);
      // this.setState({
      //   movies: response.data
      // })
    })
    .catch((error) => {
      console.log('failure response');
      console.log(error);
    });
  }

  render() {
    const movies = this.state.movies
    const moviesList = movies.map((movie) => {
      return <Movie
        key={movie.id}
        title={movie.title}
        image={movie.image_url}
        release={movie.release_date}
        onMovieSelected={() => this.addMovieToLibrary(movie)}
        />
    });

    return (
      <div>
        <Search searchCallback={this.searchMovies} />
        <div className="card">
          <ul>
            {moviesList}
          </ul>

        </div>
      </div>
    );
  }

}

export default SearchContainer;
