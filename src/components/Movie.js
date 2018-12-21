import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

const Movie = (props) => {

  const onClickMovie = () => {
    props.grabMovieTitleCallback(props.title, props.id)
  }


  return (
    <div className="movie">
      <span className="movie__content">
        <div className="movie__content-thumb">
          <div className="movie__content-title">{props.title}</div>
          <div className="movie__content-image_url"><img src={props.image_url} alt="new"/></div>
        </div>
        <div className="movie__content-overview">{props.overview}</div>
        <div className="movie__content-release_date">{props.release_date}</div>
      </span>
      <button onClick={onClickMovie}
        className="movie__select">
        Select movie for rental
      </button>
    </div>
  )
}

// onClick={() => props.deleteCardCallback(props.id)}

Movie.propTypes = {
  id:PropTypes.number,
  title:PropTypes.string,
  overview:PropTypes.string,
  release_date:PropTypes.string,
  image_url:PropTypes.string,
  external_id:PropTypes.number,
  buttonClassname:PropTypes.string,
  grabMovieTitleCallback:PropTypes.func,
};

export default Movie;
