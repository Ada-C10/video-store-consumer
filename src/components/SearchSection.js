import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Movie from './Movie';

import './SearchSection.css';

const SEARCH_MOVIES = "http://localhost:3000/movies?query="

class SearchSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
    }
  }

  onSearchSubmit = (props) => {
    this.queryApi(props);
  }

  queryApi = (props) => {
    axios.get(SEARCH_MOVIES + props)
    .then((response) => {
      // this.props.status(`Successfully loaded ${response.data.length} movies from the rental library`, 'success');
      this.setState({
        searchResults: response.data
      });
    })
    .catch((error) => {
      console.log('API Library call error');
      console.log(error.message);
      // this.props.status(`Failed to load movies: ${error.message}`, 'success');
    });
  }

    render() {

      const { searchResults } = this.state;

      const returnedResults = searchResults.map((movie, i) => {
        return (<Movie
          key={i}
          title={movie.title}
          release_date={movie.release_date}
          image_url={movie.image_url}
        />)
      });

      return (
        <div>
          <SearchBar searchCallback={this.onSearchSubmit}/>
          <p className="search-section">{returnedResults}</p>
        </div>
      )
    }
  }

  SearchSection.propTypes = {

  };

  export default SearchSection;
