import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Video extends React.Component {
  constructor(props) {
    super(props);

  }

  addToRentClickHander = (event) => {
    this.props.addToRentClickHander(this.props);
  }

  addMovieToCollection = () => {
    this.props.callback(this.props);
  }



  changeButton = () => {
    if (this.props.search === false) {
      return <button
        onClick={ this.addToRentClickHander}>
        Select for Rental
      </button>
    }
    else if (this.props.search === true) {
      return <button
        onClick={ this.addMovieToCollection}>
        Add to Library
      </button>
    }
  }

  render () {
    return (
      <section>
        <h3>{this.props.title}</h3>
        <p>{this.props.release_date}</p>
        <img src={this.props.image_url}/>
        {this.changeButton()}
      </section>
    )
  }
}

Video.propTypes = {

}

export default Video;
