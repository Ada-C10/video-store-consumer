import React from 'react';
import axios from 'axios';
import './Selection.css';


const Selection = (props) => {

  const title = props.selectedMovie
  const customerId = props.selectedCustomer.id

  const today = new Date();
  today.setDate(today.getDate() +1 );
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const dueDate = `${year}-${month}-${day}`

  const url = `http://localhost:3000/rentals/${title}/check-out?customer_id=${customerId}&due_date=${dueDate}`

  const createNewRental = () => {
    axios.post(url)
    .then((response) => {
      alert(`Successfully created new rental!`);
      window.location.reload();
    })
    .catch((error) => {
      alert(`There has been an error. ${error}: ${error.message}`);
    });
  }

  return (
    <section className="selection-box">
      <div className="selection-items">
        <p className="one-selected-item">
          Selected Movie:
          <span>{props.selectedMovie}</span>
        </p>
        <p className="one-selected-item">
          Selected Customer:
          <span>{props.selectedCustomer.name ? props.selectedCustomer.name : props.selectedCustomer}</span>
        </p>
      </div>
      <button type="button"
        className="btn btn-primary btn-lg"
        onClick={createNewRental}>Check Out New Rental</button>
    </section>
  )
}

export default Selection;
