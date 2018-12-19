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
      errors: [],
    }
  }

  onInputChange = (event) => {
    this.setState({
      errors: [],
    })
    console.log("In on input change");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const newKeywordData = {
      keyword: this.state.keyword,
    };

    // return this.handleKeyPress(newKeywordData);

    let SEARCH_URL = `http://localhost:3001/movies?query=${newKeywordData.keyword}`;

    axios.get(SEARCH_URL)
    .then((response) => {
      this.setState({
        results: response.data
      });
    })
    .catch((error) => {
      console.log(error.response);
      this.setState({
        errors: error.response.statusText
      });
      this.showErrors
    })
  };

  showResults = (result) => {

    console.log("i'm in showresults", result);
    return result.map((movie, i) => {
      return <li key={i}> {movie.title} </li>
    })
  }

  showErrors = () => {
    if (this.state.errors.length >= 1) {
      return <span>Failed to load movie about {this.state.keyword}: {this.state.errors}</span>
    }
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

        <section>
          {this.showErrors()}
        </section>
      </section>
    )
  }
}




export default Search;
