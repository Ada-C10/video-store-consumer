import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

const Movie = (props) => {

  const onClickMovie = () => {
    props.grabMovieTitleCallback(props.title, props.id)
  }


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
              <button onClick={onClickMovie}
                className="movie__select">
                Select for rental
              </button>
            </span>
            <h3 className="movie__title">{props.title}</h3>
          </div>
        </div>
      </li>
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
