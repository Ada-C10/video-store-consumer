import React from 'react';
import PropTypes from 'prop-types';
import MovieSearchResult from './MovieSearchResult';

//receives props from MovieSearchResult.js
//maps through [resultListAxiosget] and passes its external_id to MovieSearchResult.js
const MovieSearchList = (props) => {
  if (!props.resultListAxiosget) {
    return null;
  }

  const movieSearchList = props.resultListAxiosget.map((result) => {
    return <MovieSearchResult key={result.external_id}
             {...result}
             addToLibraryCallback={props.addToLibraryCallback}
              />
  });

  return (
    <div className="card-group">
      {movieSearchList}
    </div>
  )
}

MovieSearchList.propTypes = {
  resultListAxiosget: PropTypes.array.isRequired,
  addToLibraryCallback: PropTypes.func,

};

export default MovieSearchList;
