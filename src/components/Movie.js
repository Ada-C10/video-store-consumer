import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

const Movie = (props) => {

  const onMovieClick = () => {
    props.callback(props.id)
  }



  return (


    <div className="card width">
      <img className="card-img-top" src={props.imageUrl} alt={props.title} />
      <div className="movie-card card-body">
        <button
          className="btn btn-secondary"
          onClick={onMovieClick}>
          {props.buttonText}
        </button>
        <h2 className="card-title">{props.title}</h2>
        <h4 className="card-text">{props.releaseDate}</h4>
      </div>
    </div>
  )
}

Movie.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  id: PropTypes.number,
  callback: PropTypes.func,
  buttonText: PropTypes.string,
};

export default Movie;
