import React, { Component } from 'react';
import Movie from './Movie';
import './Library.css';
import axios from 'axios';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: [],
      message: undefined
    };
  }

  componentDidMount() {

    // NOTE: change this address once api is deployed
    const VIDEO_STORE_API = this.props.baseUrl + 'movies';

    axios.get(VIDEO_STORE_API)
    .then((response) => {
      this.setState({
        library: response.data,
        message: `Successfully loaded ${response.data.length} movies from the rental library.`
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  render () {
    const rentalList = this.state.library.map((movie, i) => {
      return (
        <Movie
          key={i}
          {...movie}
          buttonFunc={() => this.props.selectMovieCallback(movie)}
          theme='Select for Rental'
          />
      )
    });

    return (
      <div >
        {rentalList}
      </div>
    );
  }
}

export default Library;
