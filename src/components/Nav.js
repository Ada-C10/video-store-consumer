// import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

        </div>
      </Router>
    )
  }

}

// Nav.propTypes = {
//
// };

export default Nav;
