import React, { Component } from 'react';
import axios from 'axios';

const URL = "http://localhost:3000/"

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    axios.get(URL)
    .then((response) => {
      console.log(response);
      const movies = response.data.map((movie) => {
        return movie
      })
      this.setState({
        movies: movies,
      })
      console.log(this.state.movies)
    })
    .catch((error) => {
      console.log(error.message);
      this.setState({
        error: error.message,
        // add error messages buy mapping through check validations??
      })
    })
  }

  // displayMovies = () => {
  //   return this.state.movies.map((movie, i) => {
  //     retunr
  //   }
  // }

  render(){
    return (
      <div>
      {console.log(this.state.movies)}

    </div>
    )
  }
}

export default Movies;
