import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  render() {
    return (
      <div>
      <section>
      {this.props.title}
      </section>
      </div>
    )
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Movie ;
