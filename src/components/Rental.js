import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Rental.css';

class Rental extends Component {
  render() {

    return (
      <div>
      <h1>{this.props.title}</h1>
      <p>{this.props.name}</p>
      <p>{this.props.due_date}</p>
      <img src={this.props.image_url} alt={`${this.props.overview}`} />
      </div>
    )
  }
}

Rental.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  due_date: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
};

export default Rental;
