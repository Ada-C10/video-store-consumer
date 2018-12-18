import React from 'react';
import Movie from './Movie';
import './Search.css';
import axios from 'axios';

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

      const VIDEO_STORE_API_SEARCH = this.props.baseUrl + 'movies?query=' + event.target.value;

      axios.get(VIDEO_STORE_API_SEARCH)
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
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

export default Search;
