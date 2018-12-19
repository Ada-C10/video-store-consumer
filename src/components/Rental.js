import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Rental.css';

class Rental extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className={"rental-component-container"}>
      <img src={this.props.image_url} alt={`${this.props.overview}`} />
      <div>
      <h2>{this.props.title}</h2>
      <p>Customer: {this.props.name}</p>
      <p>Due Date: {this.props.due_date}</p>
      </div>
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
