import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
    return (
        <div>
          <h2 className="container">Customer: {props.name}</h2>
          <p>Address: {props.address}</p>
          <p>Phone: {props.phone}</p>

          <input
            type="button"
            value="Select for Rental"
            className=""
            onClick={() => props.selectedCustomer(props)}
            />
        </div>
    );
}
export default Customer;
