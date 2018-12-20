import React from 'react';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './SearchBar.css';

const SearchBar = (props) => {

  const onSearch = (event) => {

    if(props.customerSearch){
      props.searchCustomerCallback(event.target.value)
    }
    else {
      props.searchMovieCallback(event.target.value)
    }
  }

  const searchTerm = props.customerSearch ? "Customer" : "Movie";

  return (
    <section>
    <form  className="search-bar-form">
    <h3>Looking for a {searchTerm}?</h3>
    <label htmlFor="searchWord">Search</label>
    <input name="searchWord" type="text" onChange={onSearch}/>
    </form>
    </section>
  );
};

SearchBar.propTypes = {
  searchMovieCallback: PropTypes.func,
  searchCustomerCallback: PropTypes.func,
  customerSearch: PropTypes.bool
};

export default SearchBar;
