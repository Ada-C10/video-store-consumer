import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class CheckOut extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentCustomer: props.currentCustomer,
        currentMovie: props.currentMovie,
        errors: undefined,
      }
    }

  onRental = () => {
    const due_date = new Date();
    due_date.setDate(due_date.getDate() + 7)

    const customer_id = this.props.currentCustomer.id

    const url = `http://localhost:3000/rentals/${this.props.currentMovie.title}/check-out`

    const params = {
      customer_id,
      due_date,
    }

  axios.post(url, params)
    .then((response) => {
      console.log(response);

      this.setState({
        errors: `Successfully Checked out ${this.props.currentMovie.title}`,
      })

      this.props.errorCatcherCallback(this.state.errors)

    })
    .catch((error) => {
      this.setState({
        errors: `Unable to checkout: ${error.message}`,
      })

      this.props.errorCatcherCallback(this.state.errors)
    });
  };

  render() {
    return(
      //need to fix this in place to view it when scrolling with movies
      <section>
        <section>{this.props.currentCustomer.name}</section>
        <section>{this.props.currentMovie.title}</section>
        <button type="button" onClick={this.onRental}>Check Out Movie</button>
    </section>)
  }
}

CheckOut.propTypes = {
  currentCustomer: PropTypes.object,
  currentMovie: PropTypes.object,
  errorCatcherCallback: PropTypes.func,
}


export default CheckOut;
