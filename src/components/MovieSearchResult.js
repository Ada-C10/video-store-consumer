import React from 'react';
import PropTypes from 'prop-types';
import './MovieSearchResult.css';

//sends selected movie's id to parent's Component, moviesearch.js

const MovieSearchResult = (props) => {
  const {title, release_date, overview, image_url, external_id} = props;
  const onMovieSearchResultSelect = () => {
    props.addMovietoLibraryCallback(external_id)
  }


  return (
    <div className="movie">
      <section>
        {title} {release_date} {image_url} {overview}
        <button
          onClick={() => {onMovieSearchResultSelect()}}
          className="movie-btn"
          >
          Select
        </button>
      </section>
    </div>
  );
}

MovieSearchResult.propTypes = {
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  image_url: PropTypes.string.isRequired,
  external_id: PropTypes.number.isRequired,
  addMovietoLibraryCallback: PropTypes.func.isRequired,

};

export default MovieSearchResult;
