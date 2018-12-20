import React, { Component } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import Video from './Video.js';

class Search extends Component {

  constructor() {
    super();

    this.state = {
      results: [],
      keyword: "",
      errors: "",
      message: "",
    }
  }

  onInputChange = (event) => {
    this.setState({
      errors: [],
    })

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

    let SEARCH_URL = `http://localhost:3001/movies?query=${newKeywordData.keyword}`;

    axios.get(SEARCH_URL)
    .then((response) => {
      this.setState({
        results: response.data,
        message: `Found ${response.data.length} results for ${newKeywordData.keyword}`
      });
      this.props.getMessage(this.state.message);
    })
    .catch((error) => {
      this.setState({
        errors: `Could not search for "${this.state.keyword}": ${error.response.statusText}`
      });
      this.props.getMessage(this.state.errors);
    })
  };

  showMessage = () => {
    if (this.state.errors.length >= 1) {
      return <span>Failed to load movie about {this.state.keyword}: {this.state.errors}</span>
    }
  }

  addMovieToCollection = (params) => {
    axios.post(`http://localhost:3001/movies?title=${params.title}&image_url=${params.image_url}&overview=${params.overview}&release_date=${params.release_date}`)
    .then((response) => {
      this.setState({
        message: `Successfully added "${params.title}" to library`,
      });
      this.props.getMessage(this.state.message);
    })
    .catch((errors) => {
      this.setState({
        errors: errors.response.statusText,
      })
      this.props.getMessage(this.state.errors);
    })
  }

  render() {
    const results = this.state.results

    const resultCollection = results.map((result, i) => {
      return <Video
        key={i}
        title={result.title}
        release_date={result.release_date}
        image_url={result.image_url}
        search={true}
        callback={this.addMovieToCollection}/>
    });

    return (
      <section>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="keyword"></label>
            <input type="text" name="keyword"    value={this.state.keyword} onChange={this.onInputChange} required/>
            <input type="submit" value="Search" />
          </div>
        </form>
        <div>

        </div>
        <section>
          <ul>{resultCollection}</ul>
        </section>
      </section>
    )
  }
}

export default Search;
