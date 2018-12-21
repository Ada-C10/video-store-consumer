import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Status extends Component {

  render() {
    return (
      <div className="">
        {this.props.message}
      </div>
    )

  }
}

export default Status;
