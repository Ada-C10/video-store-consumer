import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import axios from 'axios';

const QUERY_URL ="http://localhost:3000/movies?query";
const MOVIES_URL ="http://localhost:3000/movies";

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      searchedMovies:[],
    };
  }

onSubmit =() =>{
  // console.log(`searching for $`);
axios.get(QUERY_URL + this.state.searchValue)
.then((response) =>{
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

  render() {
    return (
      <section>
        <input
          onChange={this.onSearchChange}
          value={this.state.searchValue}
          name="search-bar"
          className="search-bar"
          placeholder="Filter Movies"
        />
        <input type="submit" value="submit" onClick={ this.onSubmit } />
        {this.movieList}
      </section>


    );

  }
}




SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};
export default SearchBar ;
