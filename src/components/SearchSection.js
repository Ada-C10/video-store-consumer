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
      this.props.changeStatusCallback('success', `Successfully found ${response.data.length} movies containing ${props}`)
      console.log(response.data.length)

      //should we add a different message if zero movies are found with the given props??
    })
    .catch((error) => {
      this.props.changeStatusCallback('error', `I'm sorry, there has been an error. Please try again.`)
      console.log('API Library call error');
      console.log(error.message);
    });
  }

  addToLibrary = (movie) => {
    let postUrl = `${ADD_MOVIE}?title=${movie.title}&overview=${movie.overview}&release_date=${movie.release_date}&image_url=${movie.image_url}&external_id=${movie.external_id}`

    axios.post(postUrl)
    .then((response) => {
      console.log(response)
      this.props.changeStatusCallback('success', `Successfully added ${movie.title} to your library.`)
    })


  }

    render() {

      const { searchResults } = this.state;

      const returnedResults = searchResults.map((movie, i) => {
        return (<Movie
          key={i}
          title={movie.title}
          release_date={movie.release_date}
          image_url={movie.image_url}
        />
        )
      });

      return (
        <div>
          <SearchBar searchCallback={this.onSearchSubmit}/>

          <ul>
          {searchResults.map(movie => <li key={movie.id}>{movie.title} <img src={movie.image_url} /> <button onClick={() => this.addToLibrary(movie)}>Add to Library</button></li>)}
          </ul>

        </div>
      )
    }
  }

  SearchSection.propTypes = {
    changeStatusCallback: PropTypes.func.isRequired
  };

  export default SearchSection;
