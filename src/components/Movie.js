import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className="text-white bg-dark mb-3 movie-component-container">
      <img src={this.props.image_url} alt={`${this.props.overview}`} />
      <div>
      <h1>{this.props.title}</h1>
      <p>{this.props.overview}</p>
      <p><em>Release Date: {this.props.release_date}</em></p>
      </div>
      </div>
    )
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
};

export default Movie;
