import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StatusBar.css';

const StatusBar = (props) => {

  return (
    <div className="status_bar">
      <h5>{props.status}</h5>
    </div>
  )
}

StatusBar.propTypes = {
  status:PropTypes.string,
};

export default StatusBar;
