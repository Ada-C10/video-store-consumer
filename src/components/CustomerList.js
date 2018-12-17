import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

import './CustomerList.css';

const CustomerList = (props) => {
  const customerList = props.customers.map((customer) => {
    return <Customer key={customer.id} {...customer} />
  });

  return (
    <div>
      {customerList}
    </div>
  )
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
}

export default CustomerList;
