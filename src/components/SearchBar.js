import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

class SearchBar extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.searchCallback(this.state.searchTitle);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Search animes...'
            onChange={(movie) => this.setState({searchTitle: movie.target.value})}
            className='searchinput' />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchCallback: PropTypes.func.isRequired
}

export default SearchBar;
