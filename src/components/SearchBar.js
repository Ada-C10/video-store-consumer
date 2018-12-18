import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';


class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  onSearchChange = (event) => {
    console.log("printing event in onSearchChange",event);
    this.setState({
      searchValue: event.target.value,
    });

    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <section>
        <input
          onChange={this.onSearchChange}
          value={this.state.searchValue}
          name="search-bar"
          className="search-bar"
          placeholder="Search movies here"
        />
      </section>
    );
  }
}

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};
export default SearchBar ;
