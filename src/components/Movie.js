import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


const Movie = (props) => {

  const date = props.releaseDate === null ? "" : props.releaseDate.slice(0,4);
  const buttonText = props.buttonText === undefined ? "Select" : props.buttonText;
  const displayTitle = props.title.length > 45 ? props.title.slice(0,45) + "..." : props.title;

  return (
      <div className="movie-card">
        <img src={props.imageURL} alt={`${props.title}`} />
        <div>
          <h3>{displayTitle}</h3>
          <h3><small>{date}</small></h3>
          <button onClick={props.selectMovieCallback}>{buttonText}</button>
        </div>
      </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  releaseDate: PropTypes.string,
  selectMovieCallback: PropTypes.func,
  buttonText: PropTypes.string,
};

export default Movie;
