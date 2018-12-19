import React from 'react';
import PropTypes from 'prop-types';
import MovieSearchList from './MovieSearchList';
import MovieSearchBar from './MovieSearchBar';
import './MovieSearchBar.css';

const MovieSearch = (props) => {

  return (
    <section>
      <MovieSearchBar onSearchChangeCallback={props.onSearchChangeCallback}/>
      <MovieSearchList
        resultListAxiosget={props.queryList}
        addToLibraryCallback={props.addToLibraryCallback}
      />
    </section>
  )
}

  MovieSearch.propTypes = {
    onSearchChangeCallback: PropTypes.func.isRequired,
    queryList: PropTypes.array.isRequired,
    addToLibraryCallback: PropTypes.func,
  }

  export default MovieSearch;
