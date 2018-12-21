import React from 'react';
import './Customer.css';

const Customer = (props) => {
  const {
    id,
    name,
    registered_at,
    address,
    city,
    state,
    postal_code,
    phone,
    account_credit,
    movies_checked_out_count,
    buttonText,
    customerCB
  } = props.customer;

  const onCustomerClick = () => {
    customerCB(id)
  }

  return (
    <div key={id} className="card customer-card width">
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{movies_checked_out_count} movies checked out</p>
        <button
          className="btn btn-secondary"
          onClick={onCustomerClick}>
          {buttonText}
        </button>
      </div>
    </div>

  );
};


export default Customer
