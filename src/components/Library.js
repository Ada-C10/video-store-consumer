import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

import './Library.css';

const Library = (props) => {
  const movieList = props.movies.map((movie) => {
    return <Movie
            key={movie.id}
            {...movie}
            rentMovieCallback={props.rentMovieCallback} />
  });

  return (
    <section>
      <div className="movie-list">
        {movieList}
      </div>
    </section>
  )
}

Library.propTypes = {
  movies: PropTypes.array.isRequired,
  rentMovieCallback: PropTypes.func.isRequired,
}

export default Library;
