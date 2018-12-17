import React from 'react';
import PropTypes from 'prop-types';
import Movie from '.Movie';

import './Library.css';

const Library = (props) => {
  const movieList = props.movies.map((movie) => {
    return <Movie key={movie.id} {...movie} />
  });

  return (
    <div>
      {movieList}
    </div>
  )
}

Library.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default Library;
