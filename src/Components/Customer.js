import PropTypes from 'prop-types';
import React from 'react'
import './Customer.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


const Customer = (props) => {
    const { id, name, moviesCheckedOut, rentalCredit } = props;
    handleSelect = (e) => {
        console.log('this select', this.props.id)
    };
    return (
        <section className="card customer-card">
            <p className="customer-name">{name}</p>
            <p className="customer-movies-out">Movies Checked Out: {moviesCheckedOut}</p>
            <p className="customer-credit">Rental Credit: ${rentalCredit}</p>
            <button className="selectCustomer"
                    onClick={this.handleSelect}
                    type="button">Select</button>
        </section>
    );
};

Customer.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    moviesCheckedOut: PropTypes.number,
    rentalCredit: PropTypes.number,
    selectCustomerCallback: PropTypes.func,
};

export default Customer;