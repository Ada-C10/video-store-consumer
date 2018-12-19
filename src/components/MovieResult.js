import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieResult.css'

class MovieResult extends Component {

  onFormSubmit = (event) => {
    event.preventDefault();
    let movie = {
      title: this.props.title,
      overview: this.props.overview,
      release_date: this.props.release_date,
      image_url: this.props.image_url,
      external_id: this.props.external_id
    }
    this.props.addToLibraryCallback(movie)
  }

  render() {
    return (
      <article className="movie-details">
        <img src={this.props.image}/>
        <p>{this.props.title}</p>
      <form onSubmit={this.onFormSubmit}>
        <input type='submit' value='Add to Library' />
      </form>
      </article>
    )
  }
}

MovieResult.propTypes = {
  image_url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.instanceOf(Date),
  external_id: PropTypes.number.isRequired,
  addToLibraryCallback: PropTypes.func.isRequired
}

export default MovieResult;
