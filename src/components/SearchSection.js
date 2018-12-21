import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Movie from './Movie';

import './SearchSection.css';

const SEARCH_MOVIES = "http://localhost:3000/movies?query="
const ADD_MOVIE = "http://localhost:3000/movies"

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
    this.props.changeStatusCallback('loading', 'waiting...')
    axios.get(SEARCH_MOVIES + props)
    .then((response) => {
      this.setState({
        searchResults: response.data
      });
      if (response.data.length === 0) {
        this.props.changeStatusCallback('error', 'There are no results that match your search.')
      } else {
        this.props.changeStatusCallback('success', `Successfully found ${response.data.length} movies containing ${props}`)
      }

    })
    .catch((error) => {
      this.props.changeStatusCallback('error', `I'm sorry, there has been an error. Please try again.`)
    });
  }

  addToLibrary = (movie) => {
    let postUrl = `${ADD_MOVIE}?title=${movie.title}&overview=${movie.overview}&release_date=${movie.release_date}&image_url=${movie.image_url}&external_id=${movie.external_id}`

    axios.post(postUrl)
    .then((response) => {
      this.props.changeStatusCallback('success', `Successfully added ${movie.title} to your library.`)
    })
  }

  componentDidMount(){
    this.props.changeStatusCallback('default', '')
  }

    render() {

      const { searchResults } = this.state;

      const returnedResults = searchResults.map((movie, i) => {
        return (<Movie
          key={i}
          title={movie.title}
          releaseDate={movie.release_date}
          imageURL={movie.image_url}
          buttonText={"Add to Library"}
          selectMovieCallback={() => this.addToLibrary(movie)}
        />
        )
      });

      return (
        <div>
          <SearchBar searchCallback={this.onSearchSubmit}/>
          <div className="search-section">
            {returnedResults}
          </div>
        </div>
      )
    }
  }

  SearchSection.propTypes = {
    changeStatusCallback: PropTypes.func.isRequired
  };

  export default SearchSection;
