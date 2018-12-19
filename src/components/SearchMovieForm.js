import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchMovieForm.css';

class SearchMovieForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  resetState = () => {
    this.setState({
      text: ''
        });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { text } = this.state;

    if (text === '') return;
    //update
    this.props.searchResultsCallback(this.state);
    this.resetState();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} name="search-movie-form" id="search-movie-form">
        <div>
          <label htmlFor="location">Text</label>
          <input name="text" placeholder="text" onChange={this.onFormChange} value={this.state.text} />
        </div>
        <input type="submit" name="submit" value="Find a movie" />
      </form>
    );
  }


}

SearchMovieForm.propTypes = {
  searchResultsCallback: PropTypes.func.isRequired,
};

export default SearchMovieForm;
