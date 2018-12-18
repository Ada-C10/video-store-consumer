import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Result from './Result';
import './Search.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchResults: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.getSearchResults();
  }

  getSearchResults = (searchTerm) => {
    axios.get(`http://localhost:3000/movies?query=${searchTerm}`)
    .then((response) => {
      this.setState({ searchResults: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  onInputChange = (event) => {
    console.log("on input change")
    // event.target.className = ' '
    const field = event.target.name;
    const value = event.target.value;
    console.log(field, value)
    const newState = {}
    newState[field] = value;
    this.setState(newState);
    console.log(this.state.searchTerm)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submit")
    console.log(this.state.searchTerm)

    this.getSearchResults(this.state.searchTerm);
    console.log(this.state.searchResults)
    this.setState({
      searchTerm: ""
    });
  }





  // addCard = (text, emoji) => {
  //   axios.post(`https://inspiration-board.herokuapp.com/boards/Naheed/movies?text=${text}&emoji=${emoji}`)
  //   .then((response) => {
  //     this.getCards()
  //   });
  // }
  //
  // deleteCard = (id) => {
  //   axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`, id)
  //   .then((response) => {
  //     this.getCards()
  //   });
  // }

  render () {

    const searchResults = this.state.searchResults.map((movie, i) => {
      return <Result
        key={i}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}
        external_id={movie.external_id}/>
    });

    return (
      <div>
        <form className="search-bar" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Search.."
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.onInputChange}
          />
          <button type="submit" className="search-bar__submit"/>
        </form>
        <div className="searchResults">
          {searchResults}
        </div>
      </div>
    );
  }
}

Search.propTypes = {

};

export default Search;
