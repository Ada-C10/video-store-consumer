import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './styles/Search.css';
import Movie from './Movie';
import axios from 'axios';


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      searchResults: [],
    }
  }

  onInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  searchMovieAPI =(query)=> {
    const URL = "http://localhost:3000/" + `movies?query=${query}`;

    axios.get(URL)
    .then((response) => {
      const searchResultList = response.data.map((hit, i) => {
        return <Movie key={i} message="Add to library" addToLibraryCallback={this.addToLibrary} {...hit} />
      })
      this.setState({searchResults: searchResultList});
    })
    .catch((error) => {
      this.setState({error: error.message})
    })
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`User searched for ${this.state.query}`);
    this.searchMovieAPI(this.state.query);
  }

  addToLibrary = (hit) => {
    console.log(`You are the function addToLibrary from search. Clicked movie ${hit}`);

    axios.post(SOMEURLHERE, movieInfo)
    .then((response) => {
      // code here
    })
    .catch((error) => {
      // code here
    })
  }

  render () {
    return (
      <div>
        <Form className="movie-search-form" onSubmit={this.onSearchSubmit}>
          <FormGroup className="movie-search-form-container">
            <Label htmlFor="searchQuery"></Label>
            <Input name="query" placeholder="Search by Movie"
              onChange={this.onInputChange}
              />
          </FormGroup>
        </Form>
        <div>
          {this.state.searchResults}
        </div>
      </div>
    )
  }
}

export default Search;
