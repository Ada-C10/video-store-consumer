import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.searchCallback(this.state.search);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text'
            placeholder='Search'
            onChange={(e) => this.setState({
              search: e.target.value
            })}
            />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchCallback: PropTypes.func.isRequired
}
export default Search;
