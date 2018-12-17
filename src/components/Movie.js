import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

class Movie extends Component {

  render() {

    return (
      <li>
      <h1>Titanic</h1>
      <p>Ship sinks</p>
      <p>1997</p>
      </li>
    )
  }
}

Movie.propTypes = {

};

export default Movie;
