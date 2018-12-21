import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


const Movie = ({title, imageURL, releaseDate, selectMovieCallback, buttonText, currentSelected}) => {

  const date = releaseDate === null ? "" : releaseDate.slice(0,4);
  const buttonDisplayText = buttonText === undefined ? "Select" : buttonText;
  const styling = title === currentSelected ? "movie-card-selected" : "movie-card";

  let displayTitle
  if (title === null) {
    displayTitle = ""
  } else if (title.length > 45) {
    displayTitle = (title.slice(0,45) + "...")
  } else {displayTitle = title}

  return (
      <div className={styling}>
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
  currentSelected: PropTypes.string,
};

export default Movie;
