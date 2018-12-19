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
    const POSTURL = "http://localhost:3000/movies"
    console.log(`You are the function addToLibrary from search. Clicked movie ${hit.title}`);

    // const hard_coded_data = {
    //   title: 'test title',
    //   overview: 'pls pls pls work',
    //   release_date: '2010-01-01',
    //   external_id: 4456,
    //   image_url: 'image.jpg'
    // };

    const movie_data = {
      title: `${hit.title}`,
      overview: `${hit.overview}`,
      release_date: `${hit.release_date}`,
      external_id: hit.id,
      image_url: `${hit.image_url}`
    };

    axios.post(POSTURL, movie_data)
    .then((response) => {
      console.log(response.data)
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
