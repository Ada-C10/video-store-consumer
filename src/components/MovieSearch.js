import React, {Component} from 'react';
import MovieSearchList from './MovieSearchList';
import MovieSearchBar from './MovieSearchBar';
import axios from 'axios';
import './MovieSearchBar.css';

// passes onSearchChangeCallback to MovieSearchBar.js

const URL='http://localhost:3000/movies';
const QUERY='?query=';


class MovieSearch extends Component {
  constructor(){
    super()
    this.state = {
      resultListAxiosget:[],
      movieSelect: ''
    }
  }

  //triggers axios.get and passes the query
  //attached to form
  onSearchChange = (query) => {
    this.listResults(query)
  }

  //retrieves the data react app --> rails api -->external api
  //using the rails APi to query the external API
  //result from axios.get -> [resultListAxiosget]
  listResults = (query) => {
    axios.get(URL + QUERY + `${query}`)

    .then((response) => {
      console.log(response)
      const resultListAxiosget = response.data.map((result) => {
        console.log(result)
        const newResult = {
          ...result,
          imageURL:result.image_url,
          title: result.title,
          releaseDate: result.release_date,
          overview: result.overview ? result.overview: "",
        }
        return newResult
      })
      this.setState ({
        resultListAxiosget
      });

    })
    .catch((error) => {
      console.log(error.message);
      console.log("ERROR")
      this.setState({
        errorMessage: error.message,
      });

    });
  }

   addMovietoLibrary =(externalId)=> {
    const selectedMovie = this.state.resultListAxiosget.find((movie) => {
      return movie.external_id === externalId;
    });
    if (selectedMovie) {
      this.setState({
        movieSelect: selectedMovie
      });
    }

    console.log(URL);
    const image_url = selectedMovie.image_url.slice(31);
    const apiPayload = {...selectedMovie, image_url: image_url}
    console.log(apiPayload);

    axios.post(URL, apiPayload)
    .then( (response) => {
      console.log(response)
      console.log("success")
    })
    .catch( (error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <section>
        <MovieSearchBar
          onSearchChangeCallback={this.onSearchChange}/>
        <MovieSearchList
          resultListAxiosget = {this.state.resultListAxiosget}
          addMovietoLibraryCallback ={this.addMovietoLibrary}
          />
      </section>
    )}
  }

  export default MovieSearch;
