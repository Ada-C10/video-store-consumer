import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  render() {
    return (
      <div>
      <h4>{this.props.title}</h4>
      <section>
      {this.props.overview}
      </section>
      <img src={this.props.imageUrl} alt={`$this.props.title`} />
      </div>
    )
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Movie ;
