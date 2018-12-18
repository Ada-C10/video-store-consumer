import React from 'react';
import PropTypes from 'prop-types';

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
            placeholder='Search by Movie Title'
            onChange={(movie) => this.setState({searchTitle: movie.target.value})} />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchCallback: PropTypes.func.isRequired
}

export default SearchBar;
