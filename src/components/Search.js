import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Movie from './Movie';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: "",
      queryResults: [],
    }
  }

  onInputChange = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const searchURL = `http://localhost:3000/movies?query=${this.state.query}`;

    axios.get(searchURL)
    .then((response) => {
      this.setState({queryResults: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render () {
    const queryList = this.state.queryResults.map((movie, i) => {

      return <Movie key = {i} movie={movie} selectMovie={() => {this.props.addMovie(movie)}}
        buttonName="Add Movie to Library"/>

    })

    return (
      <section>
        <form className="PlayerSubmissionForm__form"
          onSubmit = {this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              name="query"
              value = {this.state.query}
              onChange = {this.onInputChange}
              type="text" />
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
        {queryList}
      </section>
    );
  }
}

Search.propTypes = {
  addMovie: PropTypes.func.isRequired,
}

export default Search;
