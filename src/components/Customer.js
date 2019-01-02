import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

import './Customer.css';

const Customer = (props) => {

  const onClickCustomer = () => {
    props.grabCustomerNameCallback(props.name, props.id)
  }


  return (
    <div className="customer">
      <Collapsible trigger={props.name}>
        <div className="content">
          <div className="customer__content-info">{props.address}</div>
          <div className="customer__content-info">{props.city}, {props.state}</div>
          <div className="customer__content-info">{props.postal}</div>

          <div className="customer__content-info">{props.phone}</div>
          <div className="customer__content-info">${props.account_credit} account credit</div>
        </div>
      </Collapsible>
      <button onClick={onClickCustomer}
        className="customer__select">
        Select for rental
      </button>
    </div>

  )
}

Customer.propTypes = {
  id:PropTypes.number,
  name:PropTypes.string,
  address:PropTypes.string,
  city:PropTypes.string,
  state:PropTypes.string,
  postal:PropTypes.string,
  phone:PropTypes.string,
  account_credit:PropTypes.number,
  created_at:PropTypes.instanceOf(Date),
  grabCustomerNameCallback:PropTypes.func,
};

export default Customer;
