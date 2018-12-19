import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movies from './Movies'

URL = "http://localhost:3000/movies?query="

class SearchBar extends Component {
    constructor() {
      super();
      this.state = {
        searchValue: '',
        searchMovies: [],
      }
    }

    onSearchChange = (event) => {
      this.setState({
        searchValue: event.target.value,
      });
    }

    onSubmit = () => {
      const url= URL + this.state.searchValue

      axios.get(url)
      .then((response) => {
        const movies = response.data.map((movie, i) => {
          return <Movies
            key={i}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            releaseDate={movie.release_date}
            image={movie.image_url}
            button="Add to Rental Library"
            callback={() => this.onAddMovieToLib(movie)}
           />
        })
        this.setState({
          searchMovies: movies,
        })
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          error: error.message,
          // add error messages buy mapping through check validations??
        })
      })
    }


    onAddMovieToLib = (movie) => {

      const url = "http://localhost:3000/movies/"

      axios.post(url, { ...movie })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        this.setState({
          errorMessage: `Failure ${error.message}`,
        })
      });
    }

  movieList = () => {
    console.log("Movie List Hit")
      if (this.state.searchMovies.length >= 1) {
        const list = this.state.searchMovies.map((movie, i) => {
        return <Movies
          key={i}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          releaseDate={movie.release_date}
          image={movie.image_url}
          button="Add to Rental Library"
          callback={() => this.onAddMovieToLib(movie)}
         />

         })
         return list
      }
    };

    render() {
      return (
        <div className="search-container" >
        <section>
          <input
          onChange={this.onSearchChange}
          value={this.state.searchValue}
          placeholder="Search.."
          name="search-bar"
          />
          <input type="submit" value="Submit" onClick={this.onSubmit}/>
        </section>
          {this.movieList}
      </div>
    );
  }

}


export default SearchBar;
