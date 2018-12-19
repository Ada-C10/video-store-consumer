import React, { Component } from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types'
import './Library.css';
import axios from 'axios';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: [],
    };
  }

  componentDidMount() {

    const VIDEO_STORE_API = this.props.baseUrl + 'movies';
    this.props.setStatusMessageCallback("Loading Libary...");

    axios.get(VIDEO_STORE_API)
    .then((response) => {
      this.setState({
        library: response.data,
        message: `Successfully loaded ${response.data.length} movies from the rental library.`
      });
      this.props.setStatusMessageCallback(this.state.message);
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
      this.props.setStatusMessageCallback(`Unable to load videos. ${this.state.error}`);
    });
  }

  render () {
    const rentalList = this.state.library.map((movie, i) => {
      return (
        <Movie
          key={i}
          {...movie}
          buttonFunc={() => this.props.selectMovieCallback(movie)}
          theme='Select for Rental'
          />
      )
    });

    return (
      <div className="library">
        {rentalList}
      </div>
    );
  }
}

Library.propTypes = {
  selectMovieCallback: PropTypes.func.isRequired,
  baseUrl: PropTypes.string.isRequired
}

export default Library;
