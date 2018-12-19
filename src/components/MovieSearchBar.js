import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieSearchBar.css';

// const URL='http://localhost:3000/';
// const BASEURL = 'movies?query='

//outputs actual search bar
//triggers axios.get in MovieSearch.js when search value is submitted


class MovieSearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  //triggers onSearchChange() in MovieSearch.js which triggers axios.get and passes search value as the query
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchChangeCallback(this.state.searchValue);
    console.log(this.state.searchValue)
  }

  render() {
    return (
      <section>
        <form onSubmit={this.onSubmit} name="seach-bar-form">
          <input
            type="text"
            onChange={this.onSearchChange}
            value={this.state.searchValue}
            name="search-bar"
            className="search-bar"
            placeholder="Search Movies!"
          />
          <input className="btn btn-success new-card-form__form-button"
            type="submit"
            value="Search Movies"
            name="submit"/>
        </form>
      </section>
    )
  }
}

MovieSearchBar.propTypes = {
  onSearchChangeCallback: PropTypes.func.isRequired,
};

export default MovieSearchBar;
