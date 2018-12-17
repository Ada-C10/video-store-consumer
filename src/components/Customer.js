import React from 'react';
import PropTypes from 'prop-types';

import './Customer.css';

const Customer = (props) => {
  const { id, name, address, city, state, postal_code, phone, account_credit } = props;
  return (
    <div>
      {id} {name} {address} {city} {state} {postal_code} {phone} {account_credit}
    </div>
  );
};

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.number.isRequired,
  postal_code: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  account_credit: PropTypes.number,
}

export default Customer;
