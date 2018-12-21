import React from 'react';
import './Navbar.css'
import PropTypes from 'prop-types';

const Navbar = (props) => {

return (
  <nav className="navbar fixed-top navbar-expand-lg ">
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

        <li>{props.errors}</li>

        <li className="nav-item dropdown">
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {props.allMovies}
            {props.customers}
            {props.search}
          </div>
        </li>
     </ul>
     <div className="song">
     <audio controls autoPlay>
       <source src="https://t4.bcbits.com/stream/1a445a31edb1024356bff6e40412165d/mp3-128/3468622126?p=0&ts=1545440169&t=96e06118500667bd3e045d2da5b0efd3c00380c2&token=1545440169_0ca0f566be9cceb50e298f46861425629243ae88" type="audio/mpeg">
       </source>
     </audio>
     </div>
   </div>
  </nav>
  )
}

Navbar.propTypes = {
  allMovies: PropTypes.object,
  search: PropTypes.object,
  searchBar: PropTypes.object,
  customers: PropTypes.object,
  errors: PropTypes.object,
}

export default Navbar;
