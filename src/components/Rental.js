import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Rental.css';

const Rental = (props) => {

  return (
    <div className="status_bar">
      <h2>{props.movie}</h2>
      <h2>{props.customer}</h2>
    </div>
  )
  
}

Rental.propTypes = {
  movie:PropTypes.string,
  customer:PropTypes.string,
};

export default Rental;
