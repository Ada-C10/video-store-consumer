import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';
import './MovieList.css';
import SearchMovieForm from './SearchMovieForm';



class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "",
      movies: [],
    };
  }

addmovie = (movie) => {
  console.log(movie);

  movie = {...movie};
  movie.inventory = 5

  const last = movie.image_url.length
  movie.image_url = movie.image_url.slice(31,last)
  axios.post("http://localhost:3000/movies", movie)
  .then((response) => {
      this.setState({
        status: `The movie titled ${movie.title} was sucessfully added`
      })
  })
  .catch((error) => {
    let message = ""
    if (error.message === "Request failed with status code 400") {
      message = `The movie titled ${movie.title} is already in your list`
    }

    this.setState({
      status: message
    })
  });

}

  makeMovieList = (movies) => {
    const moviesList = movies.map((movie, id) => {
      return (<li key={id}>
        <Movie
      title={movie.title}
      overview={movie.overview}
      release_date={movie.release_date}
      image_url={movie.image_url}/>
      <button
      onClick ={ () => {this.addmovie(movie)}}
      type="button"> Add to Library</button>
      </li>)

    });
    return moviesList
  }

  returnResults = (searchTerm) => {
    axios.get("http://localhost:3000/movies?query=" + searchTerm.text)
    .then((response) => {

      const movies = response.data.map((movie) => {
        const newMovie = {
          ...movie
        }
        return newMovie
      })

      this.setState({
        movies
      })

    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    });
  }


  render() {

    return (
      <section>
      <h4>{this.state.status !== "" ? this.state.status: "" }</h4>
      <SearchMovieForm searchResultsCallback= {this.returnResults}/>
      <ul>
      { this.state.movies !== [] && this.makeMovieList(this.state.movies)}
      </ul>
      </section>
    )
  }
}


export default MovieList;
