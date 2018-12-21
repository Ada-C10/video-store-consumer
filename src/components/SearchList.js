import React from "react";
import PropTypes from "prop-types";
import SearchResult from "./SearchResult";

const SearchList = props => {
  const SearchList = props.resultList.map(result => {
    return (
      <SearchResult
        key={result.external_id}
        {...result}
        updateMoviesCallback={props.updateMoviesCallback}
      />
    );
  });

  return <div className="container">{SearchList}</div>;
};

SearchList.propTypes = {
  resultList: PropTypes.array.isRequired,
  updateMoviesCallback: PropTypes.func
};

export default SearchList;
