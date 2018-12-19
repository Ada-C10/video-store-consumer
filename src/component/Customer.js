import React from 'react';
import PropTypes from 'prop-types';


const Customer = (props) => {

    return (
      <div>
        <h4><strong>{props.name}</strong></h4>
        <p>Movies Checked Out: {props.movies_checked_out_count}</p>
        <button type="button" onClick={props.callback}>{props.button}</button>
    </div>
    )
  }

  Customer.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    movies_checked_out_count: PropTypes.number,
    account_credit: PropTypes.number,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal_code: PropTypes.string,
    phone: PropTypes.string,
    callback: PropTypes.func,
    button: PropTypes.string
  }

export default Customer;
