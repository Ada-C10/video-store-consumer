import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

import './Library.css';

class Library extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = () => {
    axios.get('http://localhost:3000/')
    .then((response) => {
      this.setState({ movies: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  // addCard = (text, emoji) => {
  //   axios.post(`https://inspiration-board.herokuapp.com/boards/Naheed/movies?text=${text}&emoji=${emoji}`)
  //   .then((response) => {
  //     this.getCards()
  //   });
  // }
  //
  // deleteCard = (id) => {
  //   axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`, id)
  //   .then((response) => {
  //     this.getCards()
  //   });
  // }

  render() {
    const allMovies = this.state.movies.map((movie) => {
      return <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}
        external_id={movie.external_id}/>
    });

    return (
      <div >
        <div className="library">
          {allMovies}
        </div>
      </div>
    )
  }
}

Library.propTypes = {

};

export default Library;
