import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';



class CheckOut extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentCustomer: props.currentCustomer,
        currentMovie: props.currentMovie,
      }
    }

    // updateCurrentCustomer = (updatedCustomer) => {
    //   console.log(updatedCustomer);
    //   console.log("before state");
    //   this.setState({
    //     currentCustomer: updatedCustomer
    //   });
    //   console.log(updatedCustomer);
    //   console.log("after state");
    //
    // }

    // updateCurrentMovie = (updatedMovie) => {
    //   this.setState({
    //     currentMovie: updatedMovie
    //   });
    // }


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
    })
    .catch((error) => {
      this.setState({
        errorMessage: `Failure ${error.message}`,
      })
      console.log(this.errorMessage)
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
  currentMovie: PropTypes.currentMovie,
  // currentMovie: PropTypes.object,
  // currentCustomer: PropTypes.object,
  // updatedCustomerCallback: PropTypes.func,
  // updatedMovieCallback: PropTypes.func
}
//customer space and movie space
//has button to checkmovie out once movie and cutomer are added
//passsed by props callback
export default CheckOut;
