import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './Library.css'

class Library extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3000/movies`)
    .then((response) => {
      this.setState({
        movies: response.data,
        librarySummary: `${response.data.length} Movies loaded`
      });
    })
    .catch((error) => {
      this.setState({error: error.message})
    });
  }

  renderMovieList = () => {
    const componentList = this.state.movies.map((movie,index) =>{
      return (
        <Movie
        key={index}
        id={movie.id}
        image={movie.image_url}
        title={movie.title}
        overview={movie.overview}
        releaseDate={movie.release_date}
        selectedMovieCallback={this.props.selectedMovieCallback}
        />
      )
    } );
    return componentList;
  }

  render() {
    return(
      <section className="libCollection">
      {this.state.error &&<div className="error">{this.state.error}</div>}
      <section className="results-bar">{this.state.librarySummary}</section>
      <div className="list">{ this.renderMovieList() }</div>
      </section>
    )
  }
}


Library.propTypes = {
  selectedMovieCallback: PropTypes.func.isRequired,
}


export default Library;
