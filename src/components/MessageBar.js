import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import "./Item.css";

class MessageBar extends Component {
  render() {
    return (
      <div className="message">
        <p>{this.props.message}</p> 
      </div>
    );
  }
}

MessageBar.propTypes = {
  message: PropTypes.string,
};

export default MessageBar;
