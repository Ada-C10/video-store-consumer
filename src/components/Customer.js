import React from 'react';
import PropTypes from 'prop-types';

import './Customer.css';

const Customer = (props) => {
  const { id, name, address, city, state, postal_code, phone, account_credit } = props;
  const onCustomerClick = () => props.rentCustomerCallback(id, name);

  return (
    <div>
      {id} {name} {address} {city} {state} {postal_code} {phone} {account_credit}
      <button onClick={onCustomerClick}>Select for Rental</button>
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
  rentCustomerCallback: PropTypes.func.isRequired,
}

export default Customer;
