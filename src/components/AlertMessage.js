import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AlertMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: !!this.props.message
    };
  }

  hideMessage = () => {
    this.setState({showing: false});
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.message != this.props.message && nextProps.message) {
      this.setState({showing: true});
    }
  }

  render() {
    if (this.state.showing) {
      setTimeout(
        this.hideMessage,
        3000
      );
    }
    return <p> {this.state.showing && this.props.message}</p> ;
  }
}


AlertMessage.propTypes = {
 message: PropTypes.string.isRequired,
};

export default AlertMessage;
