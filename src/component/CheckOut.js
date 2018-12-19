import React, { Component } from 'react';
import PropTypes from 'prop-types';




class CheckOut extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentCustomer: props.currentCustomer,

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


  // onRental = () => {
  //   const url = `http://localhost:3000/rentals/${this.props.currentMovie.title}/check-out`
  //   console.log(url)
  //
  //   axios.post(url, this.props.currentMovie.title, this.props.currentCustomer.id )
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     // What should we do when we know the post request failed?
  //     this.setState({
  //       errorMessage: `Failure ${error.message}`,
  //     })
  //   });
  // };

  render() {
    return(
      <section>
        <section>
          {console.log(this.props.currentCustomer)}
          {console.log("CHECK OUT")}
        </section>
        <button type="button" onClick={this.onRental}>Check Out Movie</button>
    </section>)
  }
}

CheckOut.propTypes = {
  currentCustomer: PropTypes.object,
  // currentMovie: PropTypes.object,
  // currentCustomer: PropTypes.object,
  // updatedCustomerCallback: PropTypes.func,
  // updatedMovieCallback: PropTypes.func
}
//customer space and movie space
//has button to checkmovie out once movie and cutomer are added
//passsed by props callback
export default CheckOut;
