import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Customer.css';
import { Button } from 'reactstrap';


class Customer extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="customer-item">
        <div className="customer-item__details">
          <h2>{this.props.name}</h2>
          <p>{this.props.movies_checked_out_count} movies checked out</p>
      </div>
      <Button className="customer-item__select-button">Select for rental</Button>

      </div>
    )
  }
}

Customer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal_code: PropTypes.string,
  phone: PropTypes.string,
  account_credit: PropTypes.number,
  movies_checked_out_count: PropTypes.number
}

export default Customer;
