import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// PureComponents only rerender if at least one state or prop value changes.
// Change is determined by doing a shallow comparison of state and prop keys.


class AlertMessage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showing: true,
      message: this.props.message
    };
  }

  hideMessage = () => {
    this.setState({showing: false});
  }


  render() {
    // The render method on this PureComponent is called only if
    // props.list or state.filterText has changed.
    if (this.state.message) {
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
