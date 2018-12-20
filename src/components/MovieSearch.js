import React from 'react';
import MovieSearchList from './MovieSearchList';
import MovieSearchBar from './MovieSearchBar';
import PropTypes from 'prop-types';
import './MovieSearchBar.css';

const MovieSearch = (props) => {
  return (
    <section>
      <MovieSearchBar
        onSearchChangeCallback={props.onSearchChangeCallback}/>
      <MovieSearchList
        queryList = {props.queryList}
        addToLibraryCallback ={props.addToLibraryCallback}
        />
    </section>
  )
}
  MovieSearch.propTypes = {
    onSearchChangeCallback: PropTypes.func.isRequired,
    queryList: PropTypes.array.isRequired,
    addToLibraryCallback: PropTypes.func.isRequired,
  };

export default MovieSearch;
