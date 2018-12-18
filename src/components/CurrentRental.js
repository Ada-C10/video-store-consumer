import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CurrentRental.css';

class CurrentRental extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      customerId: '',
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.props.addRentalCallback(this.state);
    this.setState({
      movie: '',
      customer: '',
    })
  }

  render() {
    return (
      <div>
        <form className="form-inline">
          <label htmlFor="movie">Selected Movie:</label>
          <input readOnly name="movie" value={this.props.movie.title} className="form-control mr-sm-2"/>

          <label htmlFor="customer">Selected Customer:</label>
          <input readOnly name="customer" value={this.props.customer.name} className="form-control mr-sm-2" />
          <input type="submit" value="Check Out New Rental" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}

CurrentRental.propTypes = {
  movie: PropTypes.string,
  customer: PropTypes.string,
  addRentalCallback: PropTypes.func.isRequired,
}

export default CurrentRental;
