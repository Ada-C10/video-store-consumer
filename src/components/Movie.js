import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Movie.css';


class Movie extends Component {
  constructor() {
    super();
  }

  render () {
    const image_alt_tag = `Movie poster for ${this.props.title}`;

    return (
      <div className="movie-item">
        <img className="movie-item__image" src={this.props.image_url} alt={image_alt_tag}/>
        <div className="movie-item__details">
          <h2>{this.props.title}</h2>
          <h3>{this.props.release_date}</h3>
          <p>{this.props.overview}</p>
      </div>
      <button className="movie-item__select-button">Select for rental</button>

      </div>
    )
  }
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
  external_id: PropTypes.number
};

export default Movie;
