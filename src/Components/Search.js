import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Video from './Video.js';

class Search extends Component {

  constructor() {
    super();

    this.state = {
      results: [],
      keyword: "",
    }
  }




  onInputChange = (event) => {
    console.log("In on input change");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    console.log("onformsubmit");
    event.preventDefault();
    const newKeywordData = {
      keyword: this.state.keyword,
    };

    // return this.handleKeyPress(newKeywordData);

    let SEARCH_URL = `http://localhost:3001/movies?query=${newKeywordData.keyword}`;

    axios.get(SEARCH_URL)
    .then((response) => {
      // pressedKey.preventDefault();
      console.log("im in response data");
      this.setState({
        results: response.data
      });
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      this.setState({
        error: error.message
      });
    })
  };

  showResults = (result) => {

    console.log("i'm in showresults", result);
    return result.map((movie, i) => {
      return <li key={i}> {movie.title} </li>
    })
  }

  render() {
    const results = this.state.results

    const resultCollection = results.map((result, i) => {
      return <Video
        key={i}
        title={result.title}
        release_date={result.release_date}
        image_url={result.image_url}/>
    });

    return (
      <section>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="keyword">Search: </label>
            <input type="text" name="keyword"    value={this.state.keyword} onChange={this.onInputChange} required/>
            <input type="submit" value="Search" />
          </div>
        </form>

        <section>
          <ul>{resultCollection}</ul>
        </section>
      </section>
    )
  }
}




export default Search;
