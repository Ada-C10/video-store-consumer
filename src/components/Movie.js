import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  render() {
    return (
      <div>
      <section>
      <h1>Testing That the Movie Pg shows up! </h1>
      </section>
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
