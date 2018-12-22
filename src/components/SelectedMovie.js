import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SelectedMovie.css';

class SelectedMovie extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="selected-movie__container">
        <p className="selected-movie__label">Selected Movie</p>
        <p>{this.props.title || "None"}</p>
      </div>
    );

  }
}

export default SelectedMovie;
