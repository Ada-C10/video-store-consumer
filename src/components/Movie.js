import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


const Movie = (props) => {

  const date = props.release_date.slice(0,4);

  return (
      <div className="movie-card">
        <h3>{props.title}, {date}</h3>
        <img src={props.image_url} alt={`${props.title}`} />
        <button onClick={props.selectMovieCallback}>Select for Rental</button>
      </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string,
  image_url: PropTypes.string,
  release_date: PropTypes.string,
  selectMovieCallback: PropTypes.func,
};

export default Movie;
