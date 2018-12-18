// import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import './SearchSection.css';

class SearchSection extends Component {
  constructor(props) {
    super(props);
  }

  displaySearchResults = () => {
    console.log('clicked on button to display search results')
  }

  render() {

    return (
      <div>
        <p>Searchin section</p>
      </div>
    )
  }
}

SearchSection.propTypes = {

};

export default SearchSection;
