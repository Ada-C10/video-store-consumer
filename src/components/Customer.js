import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';


const Customer = (props) => {

  const currentRentals = props.movies > 0 ? `${props.movies} movie(s) checked out` : "";
  const memberDate = props.memberDate.slice(0,4);
  return (
      <div className="customer-card">
        <h3>{props.name}</h3>
        <div>
          <h3><small>{props.phone}</small></h3>
          <p>{currentRentals}</p>
        </div>
        <div>
          <button onClick={props.selectCustomerCallback}>Select</button>
        </div>
        <p className="member-date"><small>Member since {memberDate}</small></p>
      </div>
  )
}

Customer.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  movies: PropTypes.int,
  selectCustomerCallback: PropTypes.func,
  memberDate: PropTypes.string,
};

export default Customer;
