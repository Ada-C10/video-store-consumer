import React from 'react';
import PropTypes from 'prop-types';
import MovieSearchResult from './MovieSearchResult';

//receives props from MovieSearchResult.js
//maps through [resultListAxiosget] and passes its external_id to MovieSearchResult.js
const MovieSearchList = (props) => {
  const MovieSearchList = props.resultListAxiosget.map((result) => {
    return <MovieSearchResult key={result.external_id}
             {...result}
             addMovietoLibraryCallback={props.addMovietoLibraryCallback}
              />
  });

  return (
    <div className="card-group">
      {MovieSearchList}
    </div>
  )
}

MovieSearchList.propTypes = {
  resultListAxiosget: PropTypes.array.isRequired,
  addMovietoLibraryCallback: PropTypes.func.isRequired

};

export default MovieSearchList;
