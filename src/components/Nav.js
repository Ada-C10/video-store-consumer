// import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchButton from './SearchButton';
import LibraryButton from './LibraryButton';
import CustomersButton from './CustomersButton';

// import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <p>This is the navigation component.</p>
        <SearchButton />
        <LibraryButton />
        <CustomersButton />
      </div>
    )
  }
}

Nav.propTypes = {

};

export default Nav;
