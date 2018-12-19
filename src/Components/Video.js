import React from 'react';

import PropTypes from 'prop-types';

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  addToRentClickHander = (event) => {
    this.props.addToRentClickHander(this.props);
  }


  render () {
    return (
      <section>
        <h3>{this.props.title}</h3>
        <p>{this.props.release_date}</p>
        <img src={this.props.image_url}/>
        <button
          onClick={ this.addToRentClickHander}>
          Select for Rental
        </button>
      </section>
    )
  }
}

export default Video;
