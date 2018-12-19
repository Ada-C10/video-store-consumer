import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Search.css';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });

    this.props.searchMovieCallback(event.target.value);
  }

  render() {
    return (
      <section>
        <input
          onChange={this.onSearchChange}
          value={this.state.searchValue}
          name="search-bar"
          className="search-bar"
          placeholder="Find Movies"
        />
      </section>
    );
  }
}

Search.propTypes = {
  searchMovieCallback: PropTypes.func,
};

export default Search;
