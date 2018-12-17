import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

const Movie = (props) => {


    return (
      <div className="movie">
        <span className="movie__content">
          <div className="movie__content-title">{props.title}</div>
          <div className="movie__content-overview">{props.overview}</div>
          <div className="movie__content-release_date">{props.release_date}</div>
          <div className="movie__content-image_url"><img src={props.image_url} alt="new"/></div>
        </span>
      </div>
    )
  }

Movie.propTypes = {
  id:PropTypes.integer,
  title:PropTypes.string,
  overview:PropTypes.string,
  release_date:PropTypes.string,
  image_url:PropTypes.string,
  external_id:PropTypes.integer
};

export default Movie;
