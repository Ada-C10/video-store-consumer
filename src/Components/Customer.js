import React from 'react';
import PropTypes from 'prop-types';

export default Customer;

const Customer = (props) => {
  const {name, registered_at, address, city, state, postal_code, phone, account_credit} = props
  return(
    <div ></div>
  )
}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  redistered_at: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal_code: PropTypes.string,
  phone: PropTypes.string,
  account_credit: PropTypes.string,
};
