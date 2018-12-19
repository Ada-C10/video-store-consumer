import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie.js'

class RentalLibrary  extends Component {

  constructor(props){
    super(props);

    this.state = {
      movieList: [],
    }
  }

  displayMovies = () => {
  return this.state.movieList.map( (movie) => {
    console.log("printing movie",movie.title);
    return <Movie
            title={movie.title}
            key={movie.id}
            imageUrl={movie.image_url}
            overview={movie.overview}
            releaseDate={movie.releaseDate}/>
  });
}

  componentDidMount() {
    console.log("The component did in fact mount");
    const GET_ALL_MOVIES = "http://localhost:3000/movies";

    axios.get(GET_ALL_MOVIES)
    .then((response) => {
      console.log("in get movies", response);
      this.setState({
        movieList: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

//   const boardCards = response.data.map((cardData) =>{
// return cardData['card']
// });


  render() {
    return (
      <div>
      <section>
      <h1>Testing That the Movie Pg shows up! </h1>
      </section>
      <section>
      {this.displayMovies()}
      </section>
      </div>

    )
  }
}

RentalLibrary.propTypes = {
 movieList:PropTypes.array.isRequired,
};

export default RentalLibrary ;
