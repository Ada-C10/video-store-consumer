import React from 'react';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './SearchBar.css';

const SearchBar = (props) => {
  
  const onSearch = (event) => {
    props.searchMovieCallback(event.target.value)
  }
    return (
      <section>
        <form  className="search-bar-form">
          <h3>Looking for a Movie?</h3>
          <label htmlFor="searchWord">Search</label>
          <input name="searchWord" type="text" onChange={onSearch}/>
        </form>
      </section>
    );

};

SearchBar.propTypes = {
searchMovieCallback: PropTypes.func
};

export default SearchBar;
