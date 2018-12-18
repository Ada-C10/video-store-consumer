import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import axios from 'axios';
import './MovieList.css';
import SearchMovieForm from './SearchMovieForm';



class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: "",
      movies: []
    };
  }

  componentDidMount() {


  }

addmovie = (movie) => {
  movie.inventory = 5
  axios.post("http://localhost:3000/movies", movie)
  .then((response) => {
      console.log(response);
    // const movies = response.data.map((movie) => {
    //   const newMovie = {
    //     ...movie
    //   }
    //   return newMovie
    // })
    //
    // this.setState({
    //   movies
    // })

  })
  .catch((error) => {
    this.setState({
      errorMessage: error.message
    })
  });
}

  makeMovieList = (movies) => {
    const moviesList = movies.map((movie) => {
      return (<li key={movie.id}>
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

      <SearchMovieForm searchResultsCallback= {this.returnResults}/>
      <ul>
      { this.state.movies !== [] && this.makeMovieList(this.state.movies)}
      </ul>
      </section>
    )
  }
}

MovieList.propTypes = {

};

export default MovieList;
