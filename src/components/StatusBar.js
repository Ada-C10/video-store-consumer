import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StatusBar.css';

const StatusBar = (props) => {

  return (
    <div className="status_bar">
      <h3>{props.status}</h3>
    </div>
  )
}

StatusBar.propTypes = {
  status:PropTypes.string,
};

export default StatusBar;
