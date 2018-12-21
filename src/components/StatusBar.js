import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './StatusBar.css';

class StatusBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={this.props.statusClass}>
        <p>{this.props.statusMessage}</p>
      </div>
    )
  }
}

StatusBar.propTypes = {
  statusMessage: PropTypes.string.isRequired,
  statusClass: PropTypes.string
};

export default StatusBar;
