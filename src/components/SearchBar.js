import React, { Component } from "react";
import PropTypes from "prop-types";
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    };
  }
  onSearchChange = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSearchCallback(this.state.searchValue);
    console.log(this.state.searchValue);
  };
  render() {
    return (
      <section className="text-center">
        <form onSubmit={this.onSubmit}>
          <input
            type="search"
            onChange={this.onSearchChange}
            value={this.state.searchValue}
            name="search-bar"
            className="search-bar"
            placeholder="Search Movies"
          />
          <input className="btn btn-info new-movie-form__form-button" type="submit" name="submit"/>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  onSearchCallback: PropTypes.func.isRequired
};

export default SearchBar;
