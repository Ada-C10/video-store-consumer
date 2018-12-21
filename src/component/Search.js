import React from 'react';
import './Search.css'
import PropTypes from 'prop-types';


const Search = (props) => {

  return (

    <div className="container">
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <h4 className="header">Search for Your Favorite Movie</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-md-offset-3">
                <form action="" className="search-form" onClick={props.onSubmit}>
                <div className="form-group has-feedback">
                <label htmlFor="search" className="sr-only">Search</label>
                <input type="text" className="form-control" name="search" id="search" placeholder="search" onChange={props.onChange} value={props.search} />
                <span className="glyphicon glyphicon-search form-control-feedback"><img className="image" src={props.image} alt="search"/></span>
              </div>
              </form>
            </div>
        </div>
    </div>
  )
}

Search.propTypes = {
  onChange: PropTypes.func,
  search: PropTypes.func,
  onSubmit: PropTypes.func,
  image: PropTypes.string
}

export default Search;
