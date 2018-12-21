import React from 'react';
import { Link } from 'react-router-dom';
import Selection from './Selection';
import './NavMenu.css';

const NavMenu = (props) => {
  return (
    <div>
      <ul className="nav-menu">
        <li>
        <h1>Vambuster Video</h1></li>
        <li>
          <Link to="/">
            <button type="button" className="btn btn-secondary btn-lg">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <button type="button" className="btn btn-secondary btn-lg">Search</button>
          </Link>
        </li>
        <li>
          <Link to="/library">
            <button type="button" className="btn btn-secondary btn-lg">Library</button>
          </Link>
        </li>
        <li>
          <Link to="/customers">
            <button type="button" className="btn btn-secondary btn-lg">Customers</button>
          </Link>
        </li>
        <li>
          <Selection selectedMovie={props.selectedMovie} selectedCustomer={props.selectedCustomer} />
        </li>
      </ul>
    </div>
  )
}

export default NavMenu;
