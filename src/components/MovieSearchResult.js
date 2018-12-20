import React from 'react';
import PropTypes from 'prop-types';
import './MovieSearchResult.css';

//sends selected movie's id to parent's Component, moviesearch.js
//renders searched movies after clicking on submit

const MovieSearchResult = (props) => {
  const {title, release_date, overview, image_url, external_id, addToLibraryCallback} = props;
  const onMovieSelect = () => addToLibraryCallback(external_id);

  return (
    <div className="search app">
      <h4 className="searchmovie-title"> {title} </h4>
      <img src={image_url} alt={title} />
      <p> {release_date} </p>
      <p className="overview">{ overview.length > 130 ? `${overview.substring(0, 130)}...` : overview} </p>
      <button
        onClick={onMovieSelect}
        className="movie-btn"
        >
        Select
      </button>
    </div>
  );
}

MovieSearchResult.propTypes = {
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  image_url: PropTypes.string.isRequired,
  external_id: PropTypes.number.isRequired,
  addToLibraryCallback: PropTypes.func,

};

export default MovieSearchResult;
