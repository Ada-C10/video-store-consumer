import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';

const Customer = (props) => {
  const { id, name, movies_checked_out_count } = props;

  const onClicked = () => {
    props.getCustomer(id, name);
  }

  return <section className="customer_card">
      <div className="customer_name"><strong>{name}</strong></div>
      <div className="customer_movies">
        Movies Checked Out: {movies_checked_out_count}
      </div>
      <div className="select_customer">
        <button className="select_button" onClick={onClicked}>
          Select Customer
        </button>
      </div>
    </section>;
}

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  movies_checked_out_count: PropTypes.number.isRequired,
  getCustomer: PropTypes.func.isRequired
}

export default Customer;
