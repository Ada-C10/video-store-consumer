import PropTypes from 'prop-types';
import React from 'react'
import './SelectedCustomer.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


const SelectedCustomer = (props) => {
    console.log('cust field in nav bar', props.currentCustomer);
    return (
        <section className="selected-item">
            <p className="selected-name">{props.currentCustomer}</p>
        </section>
    );
};

SelectedCustomer.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
};

export default SelectedCustomer;