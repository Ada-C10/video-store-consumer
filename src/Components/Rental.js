import PropTypes from 'prop-types';
import React from 'react'
import './Rental.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Rental= (props) => {
    function getFormattedDate(date) {
        var year = date.getFullYear();

        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return year + '-' + month + '-' + day;
    }
    // get today's date for overdue determination
    const today = new Date();
    const formToday = getFormattedDate(today);
    const { id, name, title, checkout_date, due_date } = props;
    // let due = due_date.toLocaleString();
    const handleSelect = () => {
        props.onReturnCallback(id)
    };
    console.log(formToday > due_date);

    return (
        <section className="card rental-card">
            <section className={"rental-card-content " + (formToday > due_date ? "overdue" : "current") }>
                <p className="rental-name">Customer: {name}</p>
                <p className="rental-title">Movie: {title}</p>
                <p className="rental-out">Checked Out: {checkout_date}</p>
                <p className="rental-due">Due: {due_date}  </p>
            </section>
            <button className="selectCustomer btn btn-info"
                    onClick={handleSelect}
                    type="button">Return</button>
        </section>
    );
};

Rental.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    checkout_date: PropTypes.string,
    due_date: PropTypes.string,
};

export default Rental;