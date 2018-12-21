import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';


const Customer = ({name, phone, movies, selectCustomerCallback, memberDate}) => {

  const currentRentals = movies > 0 ? `${movies} movie(s) checked out` : "";
  const displayMemberDate = memberDate.slice(0,4);
  return (
      <div className="customer-card">
        <h3>{name}</h3>
        <div>
          <h3><small>{phone}</small></h3>
          <p>{currentRentals}</p>
        </div>
        <div>
          <button onClick={selectCustomerCallback}>Select</button>
        </div>
        <p className="member-date"><small>Member since {displayMemberDate}</small></p>
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
