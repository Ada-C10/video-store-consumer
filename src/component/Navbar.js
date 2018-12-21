import React from 'react';
import './Navbar.css'
import PropTypes from 'prop-types';

const Navbar = (props) => {

return (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <li className="navbar-brand" href="s">Netflix & Chill</li>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          {props.allMovies}<span className="sr-only">(current)</span>
        </li>

        <li className="nav-item">
          {props.customers}
        </li>

        <li className="nav-item search">
          {props.search}
        </li>

        <div className="searchBar">
          {props.searchBar}
        </div>


        <li className="nav-item dropdown">
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {props.allMovies}
            {props.customers}
            {props.search}
          </div>
        </li>

     </ul>
   </div>
  </nav>
  )
}

Navbar.propTypes = {
  allMovies: PropTypes.object,
  search: PropTypes.object,
  searchBar: PropTypes.object,
  customers: PropTypes.object,
}

export default Navbar;
