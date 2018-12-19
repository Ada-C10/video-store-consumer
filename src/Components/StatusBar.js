import React, { Component } from 'react';
// import Movie from './Movie';
import PropTypes from 'prop-types'
import './StatusBar.css';
import axios from 'axios';

const StatusBar = ({message}) => {
  console.log("I'm in Status Bar");
  console.log(message);
  return (
    <div>
      {message}
    </div>
  );
}

StatusBar.propTypes = {
  message: PropTypes.string
}

export default StatusBar;
