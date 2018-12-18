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

queryMovie =(title) =>{
  console.log(`searching for ${title}`);
axios.get(QUERY_URL + title)
.then((response) =>{
this.setState({
  searchedMovies:response.data
})
})
.catch((error) => {
  console.log(error.message);
})
  console.log("The component did in fect mount");

}


  onSearchChange = (event) => {
    console.log("printing event in onSearchChange",event);
    this.setState({
      searchValue: event.target.value,
    });

    this.onSearchChange(event.target.value);
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
      </section>
    );
  }
}

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};
export default SearchBar ;
