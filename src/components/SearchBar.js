import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import axios from 'axios';
import Movie from './Movie.js'
import { Button } from 'react-bootstrap';


const QUERY_URL ="http://localhost:3000/movies?query=";
const MOVIES_URL ="http://localhost:3000/movies/";

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      searchedMovies:[],


    };
  }



  onSubmit = () => {
    // console.log(`searching for $`);
    axios.get(QUERY_URL + this.state.searchValue)
    .then((response) =>{
      console.log("printing response from axios.get", response);
      const movieList = response.data.map((movie) => {
        return movie
      })
      console.log(response);
      this.setState({
        searchedMovies:movieList
      })
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

  onSearchChange = (event) => {

    this.setState({
      searchValue: event.target.value,

    });
  }


  handleRentalSelect = (movie) => {
    const URL = MOVIES_URL
    console.log("handlerental",movie);
    axios.post(URL, {...movie})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    })
    // this.setState({ //make custom object
    //   movie:movie
    //   });

  }

  displayMovies = () => {
    return this.state.searchedMovies.map( (movie) => {
      return <Movie key={movie.external_id}
      title={movie.title}
      imageUrl={movie.image_url}
      overview={movie.overview}
      onRentalSelect={() => this.handleRentalSelect(movie)}

       />
    });
  }

  render() {
    return (
      <section className="search-bar">
      <input
      onChange={this.onSearchChange}
      value={this.state.searchValue}
      name="search-bar"
      className="search-bar"
      placeholder="Filter Movies"
      />
      <Button bsStyle="info" type="submit" value="submit" onClick={ this.onSubmit } > Search</Button>
      {this.displayMovies()}
      </section>
    );

  }
}




SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};
export default SearchBar ;
