import React, { Component } from 'react';

class Movie extends Component  {

  render() {
    return (
      <div>

        <h1> {this.props.movie.title}</h1>
        <h1> {this.props.movie.overview} </h1>
      </div>
    )
  }
}

  Movie.propTypes = {

  };

  export default Movie;
