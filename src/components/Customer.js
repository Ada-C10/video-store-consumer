import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  const {id, name} = props.customerInfo;

  return(
    <div>
      <p>{id}: {name}</p>
    </div>
  )
}

Customer.propTypes = {
  customerInfo: PropTypes.object.isRequired,
}

export default Customer;
