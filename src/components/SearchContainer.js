import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Movie from './Movie';

import './SearchContainer.css';


const SEARCH_URL = 'https://ada-video-store-api.herokuapp.com/movies?query=';
const ADD_URL = 'http://localhost:3000/';

class SearchContainer extends React.Component {
  static propTypes = {
    setStatus: PropTypes.func.isRequired
  }

  constructor() {
    super();

    this.state = {
      movies: []
    }
  }


  addMovieToLibrary = (movie) => {
    const pic_url = movie.image_url.substring(31);

    axios.post(ADD_URL + `movies?title=${movie.title}&overview=${movie.overview}&release_date=${movie.rerelease_date}&pic_url=${pic_url}&external_id=${movie.external_id}`)
      .then(() => {
        this.props.statusCB(`Successfully added ${movie.title} to the library!`);
      })
      .catch((error) => {
        this.props.statusCB(`Something went wrong when adding ${movie.title} to the library...`)
        console.log(error);
      });
  }

  searchMovieByTitle = (title) => {
    axios.get(SEARCH_URL + title)
      .then((response) => {
        this.setState({
          movies: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    const movieCollection = this.state.movies.map((movie) => {
      return <Movie
                key={movie.id}
                data={movie}
                selectCB={ () => { this.addMovieToLibrary(movie) } }
                type="Search"
                className="movie"
              />
  });

    return (
      <div className="item-list">
        <SearchBar searchCallback={this.searchMovieByTitle} />
        <div className="searchcontainer">
          { movieCollection }
        </div>
      </div>
    );
  }
}

export default SearchContainer;
