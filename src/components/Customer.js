import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Customer.css';

const Customer = (props) => {


  return (
    <div className="customer">
    <span className="customer__content">
    <div className="customer__content-name">{props.name}</div>
    <div className="customer__content-created_at">{props.created_at}</div>

    <div className="customer__content-address">{props.address}</div>
    <div className="customer__content-city">{props.city}</div>
    <div className="customer__content-state">{props.state}</div>
    <div className="customer__content-postal">{props.postal}</div>

    <div className="customer__content-phone">{props.phone}</div>
    <div className="customer__content-account_credit">{props.account_credit}</div>
    </span>
    </div>
  )
}

Customer.propTypes = {
  id:PropTypes.integer,
  name:PropTypes.string,
  address:PropTypes.string,
  city:PropTypes.string,
  state:PropTypes.string,
  postal:PropTypes.string,
  phone:PropTypes.string,
  account_credit:PropTypes.number,
  created_at:PropTypes.instanceOf(Date),
};

export default Movie;
