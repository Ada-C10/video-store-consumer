import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CheckOut.css'
import axios from 'axios';



class CheckOut extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentCustomer: props.currentCustomer,
        currentMovie: props.currentMovie,
        isReavelad: false,
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

  renderButton = () => {
    const customer = this.props.currentCustomer.name
    const movie = this.props.currentMovie.title

    if (customer !== undefined && movie !== undefined) {
      return <button className="button" type="button" onClick={this.onRental}>Check Out {movie}</button>
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
      <div className="check-out">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Customer Name</th>
              <th scope="col">Movies Select</th>
              <th scope="col">Complete Rental</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr-background">
              <td>{this.props.currentCustomer.name}</td>
              <td><img className="image" src={this.props.currentMovie.image_url} alt={this.props.currentMovie.title}/></td>
              <td>{this.renderButton()}</td>
            </tr>
          </tbody>
        </table>
    </div>)
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
