// import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import './SearchLink.css';

class SearchLink extends Component {
  constructor(props) {
    super(props);
  }

  displaySearchResults = () => {
    console.log('clicked on button to display search results')
  }

  render() {

    return (
      <div>
      <p>Search</p>
      </div>
    )
  }
}

SearchLink.propTypes = {

};

export default SearchLink;
