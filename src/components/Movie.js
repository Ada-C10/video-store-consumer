import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Movie.css';
import { Button } from 'reactstrap';


class Movie extends Component {
  constructor(props) {
    super(props);
  }

  addtoLibraryHandler = () => {
    this.props.addToLibraryCallback(this.props);
  }

  selectMovieHandler = () => {
    this.props.selectMovieCallback(this.props.title);
  }

  render () {
    const image_alt_tag = `Movie poster for ${this.props.title}`;
    const task = this.props.message;

    // change click handler conditional to if included in library rather than message text??
    return (
      <div className="movie-item">
        <img className="movie-item__image" src={this.props.image_url} alt={image_alt_tag}/>
        <div className="movie-item__details">
          <h2>{this.props.title}</h2>
          <h4>{this.props.release_date}</h4>
          <p>{this.props.overview}</p>
          {task.includes("Add")? (
          <Button color="secondary"  className="movie-item__select-button" onClick={this.addtoLibraryHandler}>
             {this.props.message}</Button>
         ) : (
           <Button color="secondary"  className="movie-item__select-button" onClick={this.selectMovieHandler}>
              {this.props.message}</Button>
         )}
        </div>
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
  external_id: PropTypes.number,
  message: PropTypes.string,
  addToLibraryCallback: PropTypes.func,
  selectMovieCallback: PropTypes.func,
};

export default Movie;
