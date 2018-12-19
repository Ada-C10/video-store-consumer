import React, { Component } from 'react';
import axios from 'axios';

import './NewRental.css';

class NewRental extends Component {
  submitNew = () => {
    const due_date = new Date();
    due_date.setDate(due_date.getDate() + 7);

    axios.post(`localhost:3000/rentals/${this.props.movie}/check-out?customer_id=${this.props.cust_id}&due_date=${due_date}`)
      .then((res) => {
        // set status
      })
      .catch((err) => {
        alert('could not create new rental');
        console.log(err);
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
