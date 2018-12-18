// import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import './LibraryButton.css';

class LibraryLink extends Component {
  constructor(props) {
    super(props);
  }

  displayLibrary = () => {
    console.log('clicked on button to display library')
  }

  render() {

    return (
      <div>
        <p>Library</p>
      </div>
    )
  }
}

LibraryLink.propTypes = {

};

export default LibraryLink;
