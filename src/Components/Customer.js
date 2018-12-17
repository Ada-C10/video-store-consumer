import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
    const { id, name, moviesCheckedOut, rentalCredit } = props;
    return (
        <section className="card customer-card">
            <p className="customer-name"> {name}</p>
            <p className="customer-name"> {moviesCheckedOut}</p>
            <p className="customer-name"> {rentalCredit}</p>
            <button className="selectCustomer"
                    onClick={props.selectCustomerCallback(id)}
                    type="button">Select</button>
        </section>
    );
    }


}

Customer.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    moviesCheckedOut: PropTypes.number,
    rentalCredit: PropTypes.number,
    selectCustomerCallback: PropTypes.func,
};

export default Customer;