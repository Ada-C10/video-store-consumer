import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Result.css';

const Result = (props) => {

return (
  <div className="movie">
    <head><link href="https://fonts.googleapis.com/css?family=Major+Mono+Display|Montserrat" rel="stylesheet">

    </link>
    </head>
    <li>
      <div className="movie__block">
          <img className="image" src={props.image_url} alt="new"/>
          <div class="middle">
            <div class="text">{props.overview}</div>
          </div>
        <div className="movie__info">
          <span>
            <button
              onClick={() => props.addMovieToLibraryCallback(props.id)}
              className="movie__select">
              Add movie to library
            </button>
          </span>
          <h3 className="movie__title">{props.title}</h3>
        </div>
      </div>
    </li>
  </div>
)
}


Result.propTypes = {
  id:PropTypes.integer,
  title:PropTypes.string,
  overview:PropTypes.string,
  release_date:PropTypes.string,
  image_url:PropTypes.string,
  external_id:PropTypes.integer,
  addMovieToLibraryCallback:PropTypes.func
};

export default Result;
