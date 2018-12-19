import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

class Movie extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    selectedMovieCallback: PropTypes.func.isRequired,
  }

  selectedMovieCallback = () => {
    this.props.selectedMovieCallback(this.props.title);
  }

  render() {
    return (
      <article className="details">
        <div className="title">
        <h2>{this.props.title}</h2>
        <img src={this.props.image} />
        </div>
        <div className="overview">
        <p>Release Date: {this.props.releaseDate}</p>
        <p>{this.props.overview}</p>
        </div>
        <div className="button-wrapper">
        <button className="selectMovie" onClick={this.selectedMovieCallback} >Select This Movie</button></div>
      </article>
    );
  }
}

Movie.propTypes = {
  image: PropTypes.string.isRequired,
}


export default Movie;
