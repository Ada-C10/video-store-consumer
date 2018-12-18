// import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import './LibraryButton.css';

class LibraryButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <button>
          Library
        </button>
      </div>
    )
  }
}

LibraryButton.propTypes = {

};

export default LibraryButton;
