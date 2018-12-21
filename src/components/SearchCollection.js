import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import MovieResult from './MovieResult'
import './SearchCollection.css'

const TMDBMOVIEURL = 'https://rent-o-rama-app-api.herokuapp.com/';
class SearchCollection extends Component {
  constructor(props){
    super(props);
    this.state = {
      matchingMovies: [],
      resultsSummary: "",
      message: 'Search The Movie Database'
    }
  }

  searchMovie = (movie) => {
    axios.get(TMDBMOVIEURL + `movies?query=${movie}`)
    .then((response) => {
      this.setState({
        matchingMovies: response.data,
        resultsSummary: `Found ${response.data.length} results for ${movie}`,
        message: ""
      });
    })
    .catch((error) => {
      this.setState({message: error.message})
    });
  };
  renderMessage = () => {
    if(this.state.message){
      return(
        <p>{this.state.message}</p>
      )
    }
  };

  addToLibrary = (movie) => {
    console.log(movie);
    axios.post(TMDBMOVIEURL + `movies`, movie)
        .then((response) => {
          console.log(response);
          console.log(response.data);
          this.setState({
            message: `${movie.title} has been added to Rent-O-Rama's Collection`
          })
        })
        .catch((error) => {
        // Error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });


  renderMovieList = () => {
    let movies = this.state.matchingMovies;
    const componentList = this.state.matchingMovies.map((movie,index) =>{
      return (
          <MovieResult
            value={index}
            key={index}
            title={movie.title}
            overview={movie.overview}
            image_url={movie.image_url.substring(31)}
            release_date={movie.release_date}
            external_id={movie.external_id}
            image={movie.image_url}
            details={movies[index]}
            addToLibraryCallback={this.addToLibrary}
          />
      )
    } );
    return componentList;
  };

  render() {
    return(
        <section className="collection">
            {this.state.message &&<div className="error">{this.state.message}</div>}
          <section className="results-bar">{this.state.resultsSummary}</section>
          <Search
            searchMovieCallback={this.searchMovie}
          />
          <div className="add-message">{this.renderMessage()}</div>
          <div className="search-list">{this.renderMovieList() }</div>
        </section>

    )
  }
}

export default SearchCollection;
