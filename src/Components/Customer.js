import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  const { moviesCheckedOutCount, name } = props
  return(
    <div><ul>
    <li>Customer {name}</li>
    <li>has checkedout {moviesCheckedOutCount} movies</li>
    </ul></div>
  )
}

export default Customer;

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  moviesCheckedOutCount: PropTypes.number
};
