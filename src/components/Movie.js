import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


const Movie = ({title, imageURL, releaseDate, selectMovieCallback, buttonText}) => {

  const date = releaseDate === null ? "" : releaseDate.slice(0,4);
  const buttonDisplayText = buttonText === undefined ? "Select" : buttonText;
  const displayTitle = title.length > 45 ? title.slice(0,45) + "..." : title;

  return (
      <div className="movie-card">
        <img src={imageURL} alt={`${title}`} />
        <div>
          <h3>{displayTitle}</h3>
          <h3><small>{date}</small></h3>
          <button onClick={selectMovieCallback}>{buttonDisplayText}</button>
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
