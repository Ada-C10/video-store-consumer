import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = (props) => {
  return (
    <div className='navbar'>
      <nav className='navbar__nav'>
        <p>
        <Link to='/search' onClick={ props.clearCB }>
          Search
        </Link>
        </p>
        <p>
          <Link to='/library' onClick={ props.clearCB }>
            Library
          </Link>
        </p>
        <p>
          <Link to='/customers' onClick={ props.clearCB }>
            Customers
          </Link>
        </p>
      </nav>
    </div>
  )
}

export default NavBar;
