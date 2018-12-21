import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navSearchIcon from '../images/search-icon.png';
import navLibraryIcon from '../images/film-reel.png';
import navCustomersIcon from '../images/testimonial_icon.png';
import SelectedCustomer from './SelectedCustomer';
import SelectedMovie from './SelectedMovie';
import CheckoutRental from './CheckoutRental';
import './styles/Navbar.css';



class NavBar extends Component {

  render() {
    const selectedCustomerName = this.props.selectedCustomer.fullName;
    const selectedMovieName = this.props.displayedMovie.title;
    console.log("in nav bar", selectedMovieName); // Psycho

    return (
      <div className='navbar-div'>
        <nav className='navbar'>
          <Link to= "/search" className='navbar-link'>
            <img className="navbar-icon" src={navSearchIcon}/>
            <label>Search</label>
          </Link>
          <Link to='/library' className='navbar-link'>
            <img className="navbar-icon" src={navLibraryIcon}/>
            <label>Library</label>
          </Link>
          <Link to='/customers' className='navbar-link'>
            <img className="navbar-icon" src={navCustomersIcon}/>
            <label>Customers</label>
          </Link>

          <SelectedMovie title={selectedMovieName}/>
          <SelectedCustomer fullName={selectedCustomerName} />
          <CheckoutRental rentalCustomer={2}
              rentalMovie={selectedMovieName} />
        </nav>
      </div>
    );
  }
}

export default NavBar;
