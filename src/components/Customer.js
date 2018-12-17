import React, { Component } from 'react';

class Customer extends Component  {

  render() {
    return (
      <div>
        <h1> {this.props.name}</h1>
        <h1> {this.props.movies_checked_out_count} </h1>
      </div>
    )
  }
}

  Customer.propTypes = {

  };

  export default Customer;
