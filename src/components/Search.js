import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: ""
    }
  }

  onInputChange = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    
  }

  render () {

    return (
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
    );
  }
}

export default Search;
