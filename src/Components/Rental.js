import PropTypes from 'prop-types';
import React from 'react'
import './Rental.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Rental= (props) => {
    const { id, name, title, checkout_date, due_date, returned } = props;
    const handleSelect = () => {
        props.onReturnCallback(id)
    };

    return (
        <section className="card customer-card">
            <section className="customer-card-content">
                <p className="customer-name">Customer: {name}</p>
                <p className="customer-movies-out">Movies: {title}</p>
                <p className="customer-credit">Checked Out: {checkout_date}</p>
                <p className="customer-credit">Due: {due_date}</p>
            </section>
            <button className="selectCustomer btn btn-info"
                    onClick={handleSelect}
                    type="button">Return</button>
        </section>
    );
};

Rental.propTypes = {
    id: PropTypes.number,
    name: PropTypes.number,
    title: PropTypes.number,
    checkout_date: PropTypes.number,
    due_date: PropTypes.number,
};

export default Rental;