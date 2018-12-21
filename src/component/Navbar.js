import React from 'react';
import './Navbar.css'
import PropTypes from 'prop-types';

const Navbar = (props) => {

return (
  <div>
  <nav className="navbar fixed-top navbar-expand-sm navbar-pink bg-red">
  <li className="navbar-brand shimmer" href="s">Netflix & Chill</li>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        {props.allMovies}<span className="sr-only">(current)</span>
      </li>
      <li className="nav-item">
        {props.customers}
      </li>
      <li className="nav-item">
        {props.search}
      </li>
    </ul>
    </div>
    <span className="errors">{props.errors}</span> 
    </nav>

  </div>
  )
}

Navbar.propTypes = {
  allMovies: PropTypes.object,
  searchBar: PropTypes.object,
  customers: PropTypes.object,
  errors: PropTypes.string,
  search: PropTypes.object,
}

export default Navbar;
