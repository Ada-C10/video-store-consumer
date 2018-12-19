import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

const Movie = ({title, release_date, image_url, buttonFunc, theme}) => {


  return (
    <div className='movie'>
      <img
        alt={`movie cover for ${title}`}
        src={image_url}
        className="movie-img" />
      <div className="movie-info">
        <h1>{title}</h1>
        <p>{release_date}</p>
      </div>
      <div
        className="movie-options"
        onClick={() => buttonFunc()} >
        {theme}
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  buttonFunc: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}

export default Movie;
