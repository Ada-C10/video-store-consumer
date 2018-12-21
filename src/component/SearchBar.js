import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Search from './Search'
import "./SearchBar.css"
import "./Movies.css"
import Movies from './Movies'

const URL = "http://localhost:3000/movies?query="

class SearchBar extends Component {
    constructor() {
      super();
      this.state = {
        searchValue: '',
        searchMovies: [],
        errors: undefined
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
          let title = `Add ${movie.title} to Netflix & Chill`
          return <Movies
            key={i}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            releaseDate={movie.release_date}
            image={movie.image_url}
            button={title}
            callback={() => this.onAddMovieToLib(movie)}
           />
        })
        this.setState({
          searchMovies: movies,
        })
        console.log(this.state.searchMovies);
      })
      .catch((error) => {
        this.setState({
          errors: error.message,
        })
        this.props.errorCatcherCallback(error)
      })
    }

    onClickSubmit = () => {
      if (this.state.searchValue.length !== 0) {
        return this.onSubmit()
      }
      else {
        this.setState({
          errors: `Search can't be blank`,
        })
        this.props.errorCatcherCallback(this.state.errors)
      }
    }



    onAddMovieToLib = (movie) => {

      const url = "http://localhost:3000/movies/"

      axios.post(url, { ...movie })
      .then((response) => {
        console.log(response);
        this.setState({
          errors: `${movie.title} successfully added to Netflix & Chill`,
        })
        this.props.errorCatcherCallback(this.state.errors)
      })
      .catch((error) => {

        this.setState({
          errors: `Unable to find the movies you are looking for: ${error.message}`,
        })

        this.props.errorCatcherCallback(this.state.errors)
      });
    }

    render() {
      const image = "http://www.myiconfinder.com/uploads/iconsets/256-256-42777f4dee0832bd856f069b91e56b60-reel.png"

      return (
      <div className="search-container">
        <Search
          onSubmit={() => this.onClickSubmit()}
          onChange={this.onSearchChange}
          search={this.state.searchValue}
          image={image}
          />

        <div className="card-group search-movies">
          {this.state.searchMovies}
        </div>
      </div>
    );
  }

}

SearchBar.propTypes = {
  errorCatcherCallback: PropTypes.func,
}

export default SearchBar;
