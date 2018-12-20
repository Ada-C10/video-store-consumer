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

  handleSelectMovie = (id, title) => {
    if (this.props.onSelectMovie) { //if onSelectMovie is defined then execute it
      this.props.onSelectMovie(id, title);
    }
  }

  displayMovies = () => {
  return this.state.movieList.map( (movie) => {
    console.log("printing movie",movie.title);
    return <Movie
              id={movie.id}
              title={movie.title}
              key={movie.id}
              imageUrl={movie.image_url}
              overview={movie.overview}
              releaseDate={movie.releaseDate}
              isInLibrary={true}
              onSelectMovie={this.handleSelectMovie}
            />
  });
}


  componentDidMount() {
    console.log("The component did in fact mount");
    const GET_ALL_MOVIES = "http://localhost:3000/movies";

    axios.get(GET_ALL_MOVIES)
    .then((response) => {
      console.log("in rental library axios.get", response);
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
      {this.displayMovies()}
      </section>
      </div>

    )
  }
}

RentalLibrary.propTypes = {
 onSelectMovie: PropTypes.func,
};

export default RentalLibrary ;
