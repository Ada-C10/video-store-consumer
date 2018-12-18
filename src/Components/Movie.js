import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

const Movie = ({id, title, release_date, image_url, buttonFunc}) => {


  return (
    <div className='movie'>
      <img alt={`movie cover for ${title}`} src={image_url} />
      <div className="movie-info">
        <h1>{title}</h1>
        <p>{release_date}</p>
      </div>
      <div>
        {buttonFunc}
      </div>


    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
  buttonFunc: PropTypes.string //PropTypes.func
}

export default Movie;
