import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";


const Movie = (props) => {
  const {
    id, title, release_date, image_url, movieActionCallback
  } = props;

  const buttonMessage = props.buttonLibrary ? 'Add to Library' : 'Select for Rental';

  return (
    <div className="library-container">
      <div className="item-list_container">
      <ul className="movie item">
        <img src={image_url} alt=''/>
        <div className="item_details">
          <h2>{title}</h2>
          <p>{release_date}</p>
        </div>

        <button
          onClick={() => movieActionCallback()}
          className="item__button">{buttonMessage}</button>
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
  movieActionCallback: PropTypes.func,
  buttonLibrary: PropTypes.boolean,
}

export default Movie;
