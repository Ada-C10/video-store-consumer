import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

class MovieSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  // componentDidMount() {
  //   axios.get(URL)
  //     .then((response) => {
  //       const movies = response.data.map((movie) => {
  //         const newMovie = {
  //           ...movie,
  //         }
  //         return newMovie;
  //       })
  //       this.setState({movieList: movies, masterList: movies})
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       this.setState({
  //         errorMessage: error.message,
  //       })
  //     })
  //
  // }

  // onSearchChange = (event) => {
  //   this.setState({
  //     searchValue: event.target.value,
  //   });
  //
  //   this.props.onSearchChange(event.target.value);
  // }




  render () {
    return (
      <section>
        <input
          onChange={this.onSearchChange}
          value={this.state.searchValue}
          name="search-bar"
          className="search-bar"
          placeholder="Search by movie title"
        />
      </section>

    );
  }
}

MovieSearch.propTypes = {
  onSearchChange: PropTypes.func,
};

export default MovieSearch;
