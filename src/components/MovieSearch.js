import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './SearchBar.css';

const URL='http://localhost:3000/';
const BASEURL = 'movies?query='
// const KEY = process.env.REACT_APP_apikey

class MovieSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      returnedSeachedMovies: []
    };
  }

  //retrieves a movie from rails api
  //when onSubmit occurs, trigger axios.get
  onSubmit = (event) => {
    this.state.query = event.target.value;
    this.setState(query);
  }

    axios.get(`${URL}${BASEURL}${this.state.query}`)
      .then((response) => {
        console.log("SUCCESS");
        console.log(response);
        // const seachedMovies = response.data.map((movie) => {
        //   const seachedMovie = {
        //     ...movie,
        //   }
        //   return seachedMovie; //display all searched movies
        //
        // })
        this.setState({returnedSeachedMovies: response.data})
      })
      .catch((error) => {
        console.log("ERROR");
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      })

  }
  render() {
    const MovieSearch = this.state.returnedSeachedMovies.map((movie, i) => {
      return
      <section>
         key={i}
         title={movie.title}
         release_date={movie.release_date}
         image_url={movie.image_url}
         <input
          name="search-bar"
          className="search-bar"
          placeholder="Search by movie title"
          value={this.state.query}
          onChange={this.onSubmit} />
      </section>
    }

MovieSearch.propTypes = {
  onSearchChange: PropTypes.func,
};

export default MovieSearch;
