import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css'


class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }


  onInputChange = (event) => {
    const newState = {};
    newState[event.target.name] = event.target.value;

    this.setState(newState)
    console.log(this.state.query);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.searchQueryCallback(this.state);

    this.setState({
      query: '',
    });

  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input name="query" value={this.state.query} onChange={this.onInputChange} placeholder="Enter a movie title" type="text" className="form-input"/>
      </form>

    )
  }







}

SearchForm.propTypes = {
  searchQueryCallback: PropTypes.func.isRequired,
};


export default SearchForm;
