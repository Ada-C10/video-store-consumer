import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import axios from 'axios';

import './Rental.css';

class Rental extends Component {
  constructor(props){
    super(props);
  }

  makeRental = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const movieDueDate = `${year}-${month}-${day}`;

    const url=`http://localhost:3000/rentals/${this.props.movie}/check-out?customer_id=${this.props.customerId}&due_date=${movieDueDate}`

    axios.post(url)
    .then((response) => {
      console.log("successfully posted film", response);
    })
    .catch((error) => {
      console.log("could not post film", error);
    });
    this.props.rentalCallback(`Successfully rented ${this.props.movie} to ${this.props.customer}`)
  }


  render(){
    return(
      <div>
        <div>
          {this.props.movie}
        </div>
        <div>
          {this.props.customer}
        </div>
        <Button onClick={this.makeRental}>Check Out New Rental</Button>
      </div>
    )
  }
}


Rental.propTypes = {
  movie:PropTypes.string,
  customer:PropTypes.string,
  customerId:PropTypes.number,
  url:PropTypes.string,
  rentalCallback:PropTypes.func
};

export default Rental;
