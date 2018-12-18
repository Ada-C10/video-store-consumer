import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

class MovieSearch extends Component {

  construtor(props) {
    super(props);

    this.setState = {
      searchValue: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });

    this.props.onSearchChange(event.target.value);
  }


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
