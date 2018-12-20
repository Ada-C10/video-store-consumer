import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Rental.css';

class Rental extends Component {
  constructor(props){
    super(props);
    this.state = {
      rental: {
        movie: this.props.movie,
        customer: this.props.customer,
      },
      url: this.props.url,
      rentals: [],
    };
  }

  componentDidMount() {
    axios.post(this.props.url, this.state.rental)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

Rental.propTypes = {
  movie:PropTypes.string,
  customer:PropTypes.string,
  url:PropTypes.string,
};

export default Rental;
