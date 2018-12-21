import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.release}</p>
      <img src={props.image}
        alt="movie poster"
        />
      <p>{props.overview}</p>
      <input
        type="button"
        value="Add to library"
        className=""
        onClick={props.onMovieSelected} />

      <input
        type="button"
        value="Select for Rental"
        className=""
        onClick={() => props.selectedMovie(props)}/>

    </div>
  )
}



export default Movie;
