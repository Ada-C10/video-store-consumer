// import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchLink from './SearchLink';
import LibraryLink from './LibraryLink';
import CustomersLink from './CustomersLink';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Router>
        <div>
          <p>This is the navigation component.</p>
          <SearchLink />
          <LibraryLink />
          <CustomersLink />
        </div>
      </Router>
    )
  }

}

// Nav.propTypes = {
//
// };

export default Nav;
