import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';



const NavBar = (props) => {
  return (
    <div className='navbar'>
      <nav className='navbar__nav'>
        <p className="navbar__links">
        <Link to='/search' onClick={ props.clearCB } className="link">
          Search
        </Link>
        </p>
        <p className="navbar__links">
          <Link to='/library' onClick={ props.clearCB } className="link">
            Library
          </Link>
        </p>
        <p className="navbar__links">
          <Link to='/customers' onClick={ props.clearCB } className="link">
            Customers
          </Link>
        </p>
      </nav>
    </div>
  )
}

export default NavBar;
