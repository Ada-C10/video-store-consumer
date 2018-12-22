import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import Movie from './Movie';
import './Library.css'

class Library extends Component {
  render() {
    const componentList = this.props.movies.map((movie) => {
      return <Movie
          key={movie.id}
          id={movie.id}
          image={movie.image_url}
          title={movie.title}
          overview={movie.overview}
          releaseDate={movie.release_date}
          selectedMovieCallback={this.props.selectedMovieCallback}
      />
    });
    return (
        <section className="customer-card-group">
          {componentList}
        </section>
    )
  };
  }

//   render() {
//     return(
//       <section className="libCollection">
//       {this.state.error &&<div className="error">{this.state.error}</div>}
//       <section className="results-bar">{this.state.librarySummary}</section>
//       <div className="list">{ this.renderMovieList() }</div>
//       </section>
//     )
//   }
// }
Library.propTypes = {
    movies: PropTypes.array,
  selectedMovieCallback: PropTypes.func.isRequired,
};


export default Library;
