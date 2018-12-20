import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './LibrarySection.css';

const GET_MOVIES = "http://localhost:3000/movies"

class LibrarySection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.props.changeStatusCallback('loading', 'waiting...')
    axios.get(GET_MOVIES)
    .then((response) => {
      // this.props.status(`Successfully loaded ${response.data.length} movies from the rental library`, 'success');

      this.setState({
        movies: response.data
      });
      this.props.changeStatusCallback('success', `Successfully loaded ${this.state.movies.length} movies`)
    })
    .catch((error) => {
      this.props.changeStatusCallback('error', `I'm sorry, there has been an error. Please try again.`)
      console.log('API Library call error');
      console.log(error.message);
      // this.props.status(`Failed to load movies: ${error.message}`, 'success');
    });
  }

  render() {

    const { movies } = this.state;

    const allMovies = movies.map((movie, i) => {

      return (<Movie
        key={i}
        title={movie.title}
        release_date={movie.release_date}
        image_url={movie.image_url}
        selectMovieCallback={() => this.props.selectMovieCallback(movie)}
      />)
    });

    return (
      <div className="library-section">
        {allMovies}
      </div>
    )
  }
}

LibrarySection.propTypes = {
  changeStatusCallback: PropTypes.func,
  selectMovieCallback: PropTypes.func
}

export default LibrarySection;
