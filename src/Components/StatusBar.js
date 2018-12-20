import React from 'react';
// import Movie from './Movie';
import PropTypes from 'prop-types'
import './StatusBar.css';

const StatusBar = ({message, clearMessageCallback}) => {
  
  const clearMessageHandler = () => {
    clearMessageCallback();
  }

  return (
      <div>
      { message && <div> {message} </div> }
      { message && <button onClick={clearMessageHandler}>X</button> }
      </div>
  );
}

StatusBar.propTypes = {
  message: PropTypes.string,
  clearMessageCallback: PropTypes.func
}

export default StatusBar;
