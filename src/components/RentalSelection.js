import React, { Component } from 'react';
import PropTypes from 'prop-types';


class RentalSelection extends Component  {

  render() {
    return (
      <div>
        <h2> {this.props.currentCustomerName} </h2>
        <h2> {this.props.currentMovieTitle} </h2>
        <button onClick={this.props.checkOutCallback}>Check Out</button>
      </div>

    )
  }
}

  RentalSelection.propTypes = {
    checkOutCallback: PropTypes.func,
    currentCustomerName: PropTypes.number,
    currentMovieTitle: PropTypes.string,

  };

  export default RentalSelection;
