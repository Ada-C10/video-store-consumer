import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

class Movie extends Component {
  render() {

    return (
      <div>
      <h1>{this.props.title}</h1>
      <p>{this.props.overview}</p>
      <p>{this.props.release_date}</p>
      <img src={this.props.image_url} alt={`${this.props.overview}`} />
      </div>
    )
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  overview: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
};

export default Movie;
