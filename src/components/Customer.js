import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  const {id, name} = props.customerInfo;

  return(
    <div>
      <p>{id}: {name}</p>
      <button
        type="button"
        onClick={props.selectCustomer}
      >
        Select Customer
      </button>
    </div>
  )
}

Customer.propTypes = {
  customerInfo: PropTypes.object.isRequired,
  selectCustomer: PropTypes.func.isRequired,
}

export default Customer;
