import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      searchTerm: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('search submitted', this.state.searchTerm)
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Search Movie Titles'
            onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchCallback: PropTypes.func.isRequired
}

export default SearchBar;
