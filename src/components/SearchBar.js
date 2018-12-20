import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

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
    this.props.searchCallback(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder={'Search Titles >>'}
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
