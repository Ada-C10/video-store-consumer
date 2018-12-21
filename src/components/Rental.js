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
    // const newRental = {
    //   movie: this.props.movie,
    //   customer: this.props.customerId,
    //   dueDate: movieDueDate,
    // }

    const url = this.props.url + '?' + `customer_id=${this.props.customerId}&due_date=${movieDueDate}`;

    console.log("it responded to click");
    console.log(url);

    axios.post(url)
    .then((response) => {
      console.log("successfully posted film", response);
      // console.log(newRental);
    })
    .catch((error) => {
      console.log("could not post film for some reason", error);
    });
  }


  render(){

    return(
      <div className="rental-container">
        <div className="rental-box">
          <p>{this.props.movie}</p>
        </div>
        <Button onClick={this.makeRental}>Check Out New Rental</Button>
        <div className="rental-box">
          <p>{this.props.customer}</p>
        </div>
      </div>
    )
  }
}


Rental.propTypes = {
  movie:PropTypes.string,
  customer:PropTypes.string,
  customerId:PropTypes.number,
  url:PropTypes.string,
};

export default Rental;
