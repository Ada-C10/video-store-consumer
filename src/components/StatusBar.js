import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './StatusBar.css';

class StatusBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusClass: 'default'
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className={this.props.statusClass}>
        Successfully checked out {this.props.movie} to {this.props.customer}
      </div>
    )
  }
}

StatusBar.propTypes = {

};

export default StatusBar;
