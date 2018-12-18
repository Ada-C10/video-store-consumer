import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CurrentRental.css';

class CurrentRental extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      customer: '',
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
        <form>
          <input readOnly name="movie" value={this.props.movie} />
          <input readOnly name="customer" value={this.props.customer} />
          <input type="submit" value="Check Out New Rental" />
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
