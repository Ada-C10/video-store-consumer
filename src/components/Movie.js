import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


const Movie = (props) => {

  const date = props.release_date === null ? "" : props.release_date.slice(0,4);

  return (
      <div className="movie-card">
        <img src={props.image_url} alt={`${props.title}`} />
        <div>
          <h3>{props.title}, <small>{date}</small></h3>
          <button onClick={props.selectMovieCallback}>Select</button>
        </div>
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
