import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <div className='navbar'>
      <nav className='navbar__nav'>
        <p>
        <Link to='/search'>
          Search
        </Link>
        </p>
        <p>
          <Link to='/library'>
            Library
          </Link>
        </p>
        <p>
          <Link to='/customers'>
            Customers
          </Link>
        </p>
      </nav>
    </div>
  )
}

export default NavBar;
