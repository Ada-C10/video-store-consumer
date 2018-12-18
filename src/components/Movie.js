import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

const Movie = (props) => {

  const { title, overview, image_url, release_date } = props.movie;



  return(
    <div className="movie">
      <h3>{title} </h3>
      <div>{release_date}</div>
      <img src={image_url} alt={title}/>
      <p>{overview}</p>
        <button
          type="button"
          onClick={props.selectMovie}
        >
          {props.buttonName}
        </button>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  selectMovie: PropTypes.func.isRequired,
  buttonName: PropTypes.string,
};

export default Movie;
