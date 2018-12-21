import React, { Component } from 'react';
import axios from 'axios';
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

    render() {
      const image = "http://www.myiconfinder.com/uploads/iconsets/256-256-42777f4dee0832bd856f069b91e56b60-reel.png"
      return (
        // <div className="search-container" >
        // <section className="form">
        //   <input
        //   onChange={this.onSearchChange}
        //   value={this.state.searchValue}
        //   placeholder="Search.."
        //   name="search-bar"
        //   />
        //   <input className="button" type="submit" value="Submit" onClick={this.onSubmit}/>
        // </section>
      <div className="search-container">
        <Search
          onSubmit={this.onSubmit}
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


export default SearchBar;
