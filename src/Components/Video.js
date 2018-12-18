import React from 'react';

import PropTypes from 'prop-types';

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  addToLibraryClickHander = (event) => {

  }

  render () {
    return (
      <section>
        <h3>{this.props.title}</h3>
        <p>{this.props.release_date}</p>
        <img src={this.props.image_url}/>
        <button
          onClick={this.addToLibraryClickHander}>
          Add to library
          </button>
      </section>
    )
  }
}

export default Video;
