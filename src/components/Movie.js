import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

const Movie = (props) => {
  const { id, title, release_date, image_url } = props;
  const onMovieClick = () => props.rentMovieCallback(id, title);

  return (
    <div className="movie">
      <h4 className="movie-title"> {title} </h4>
      <img src={image_url} alt={title} />
      <p> {release_date} </p>
      <button className="movie-btn" onClick={onMovieClick}>Select for Rental</button>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  inventory: PropTypes.number,
  image_url: PropTypes.string.isRequired,
  external_id: PropTypes.number,
  rentMovieCallback: PropTypes.func.isRequired,
}

export default Movie;
