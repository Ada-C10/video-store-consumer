import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Library.css';


class Library extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <p>Here is a fantastic fantabulous libraryyyy</p>
        <ul>
          <li>Cool Movie </li>
          <li>Cool Movie </li>
          <li>Cool Movie </li>
          <li>Cool Movie </li>
          <li>Cool Movie </li>
        </ul>
      </div>
    )
  }

}

export default Library;
