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
        {this.props.statusMessage}
      </div>
    )
  }
}

StatusBar.propTypes = {
  statusMessage: PropTypes.func.isRequired,
  statusClass: PropTypes.string
};

export default StatusBar;
