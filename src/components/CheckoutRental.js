import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './styles/Customer.css';
import axios from 'axios';


class CheckoutRental extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  postRental = () => {
    const today = new Date();
    let dueDate = new Date(today.getTime() + (7 * 24 * 60 *60 * 1000));

    const movie = this.props.rentalMovie;
    const customer = this.props.rentalCustomer;
    const RENTURL = `http://localhost:3000/rentals/${movie}/${customer}/check-out?due_date=${dueDate}`;


    axios.post(RENTURL)
    .then((response) => {
      console.log("Rental sent", response.data)

      const successfulRental = `Successfully checked out ${this.props.rentalMovie} to ${this.props.rentalCustomer}`;
      this.setState({alert: successfulRental})
    })
    .catch((error) => {
      this.setState({error: error.message})
    })
  }


render () {
  console.log('in render:');
  console.log(this.props);
  return (
    <div>
      <Button className="checkout-rental-button" onClick={this.postRental}>Checkout New Rental</Button>
    </div>

  )
}
}

CheckoutRental.propTypes = {
  rentalCustomer: PropTypes.string,
  rentalMovie: PropTypes.string
}

export default CheckoutRental;
