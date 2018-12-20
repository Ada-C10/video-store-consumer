import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className="Nav">
          <h2><Link to= "/search">Search</Link></h2>
          <h2><Link to= "/customers">Customers</Link></h2>
          <h2><Link to= "/library">Library</Link></h2>
        </div>
    )
  }

}

export default Nav;
