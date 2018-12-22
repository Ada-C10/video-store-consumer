import PropTypes from 'prop-types';
import Rental from './Rental';
import React from 'react';
import {Component} from 'react';
// import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class RentalList extends Component {
   render() {
        const rentalList = this.props.rentals.map((rental) => {
            return <Rental key={rental.id}
                             onReturnCallback={this.props.onReturnCallback}
                             {...rental} />
        });
        return (
            <section className="customer-card-group">
                {rentalList}
            </section>
        )
    };
}


RentalList.propTypes = {
    rentals: PropTypes.array,
    onReturnCallback: PropTypes.func,
};


export default RentalList