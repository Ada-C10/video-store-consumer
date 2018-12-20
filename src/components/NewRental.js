import React, { Component } from 'react';
import axios from 'axios';

import './NewRental.css';

class NewRental extends Component {
  submitNew = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    const month = (date.getMonth() + 1);
    const day = date.getDate();
    const year = date.getFullYear();

    const due_date = [year, month, day].join('-')

    axios.post(`http://localhost:3000/rentals/${this.props.movie}/check-out?customer_id=${this.props.cust_id}&due_date=${due_date}`)
      .then(() => {
        this.props.statusCB(`"${this.props.movie}" successfully checked out by ${this.props.customer}!`);
        this.props.clearCB();
      })
      .catch((err) => {
        console.log(err);
        this.props.clearCB();
        this.props.statusCB('could not create new rental :(')
      });
  }

  render () {
    return (
      <div className="newrental">
        <div className="newrental__selection">
          <p className="newrental__selectionheader">Selected Movie</p>
          <h3 className="newrental__selectiontitle">{ this.props.movie }</h3>
        </div>
        <div className="newrental__selection">
          <p className="newrental__selectionheader">Selected Customer</p>
          <h3 className="newrental__selectioncustomer">{ this.props.customer }</h3>
        </div>
        <button onClick={ this.submitNew }>Check Out New Anime</button>
      </div>
    )
  }
}

export default NewRental;
