import React, { Component } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
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
    console.log("hello");
    axios.get(GET_MOVIES)
    .then((response) => {
      // this.props.status(`Successfully loaded ${response.data.length} movies from the rental library`, 'success');
      this.setState({
        movies: response.data
      });
    })
    .catch((error) => {
      console.log('API Library call error');
      console.log(error.message);
      // this.props.status(`Failed to load movies: ${error.message}`, 'success');
    });
  }

  render() {

    const { movies } = this.state
    console.log(movies)

    const allMovies = movies.map((movie, i) => {

      return (<Movie
        key={i}
        title={movie.title}
        release_date={movie.release_date}
        image_url={movie.image_url}
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

};

export default LibrarySection;
