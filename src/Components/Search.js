import React from 'react';
import Movie from './Movie';
import './Search.css';
import axios from 'axios';
import PropTypes from 'prop-types'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: "",
      movies: []
    }
  }

  handleKeyInput = (event) => {
    if (event.key === 'Enter') {
      const searchTerm = event.target.value;

      const VIDEO_STORE_API_SEARCH = this.props.baseUrl + 'movies?query=' + searchTerm;
      this.props.setStatusMessageCallback(`Searching for ${searchTerm}...`);

      axios.get(VIDEO_STORE_API_SEARCH)
      .then((response) => {
        this.setState({
          movies: response.data,
        });
        this.props.setStatusMessageCallback(`Found ${response.data.length} results for ${searchTerm}.`);
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
        this.props.setStatusMessageCallback(`Unable to search ${searchTerm}. ${this.state.error}`);
      });
    }
  };

  render() {
    const searchList = this.state.movies.map((movie, i) => {
      return (
        <Movie
          key={i}
          {...movie}
          buttonFunc={() => this.props.addMovieCallback(movie)}
          theme='Add to Library'
          />
      )
    });

    return (
      <div >
        <section className="search-bar">
          <label htmlForfor="hit-enter">Hit Enter!</label>
          <input
            type="text"
            name="search"
            placeholder="Search by Movie Title"
            onKeyPress={this.handleKeyInput}
            />
        </section>
        <div >
          {searchList}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  addMovieCallback: PropTypes.func.isRequired,
  baseUrl: PropTypes.string.isRequired
}

export default Search;
