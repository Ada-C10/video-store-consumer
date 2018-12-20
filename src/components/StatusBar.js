import axios from 'axios';
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

};

export default StatusBar;
