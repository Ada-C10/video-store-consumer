import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import CustomerData from './components/CustomerData';
import Library from './components/Library';
import SearchContainer from './components/SearchContainer';
import CheckoutRental from './components/CheckoutRental';
import Notification from './components/Notification';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMovieToDisplay: "",
      showNotification: false,
      status: {
        message: '',
      }
    }
  }

  selectMovie = (movie) => {
    console.log(movie.title);
    this.setState({
      selectedMovieToDisplay: movie.title
    })
  }



  selectCustomer = (customer) => {
    console.log(customer);
    this.setState({
      selectedCustomer: customer
    })
  }

  handleCheckoutClick = () => {
    const {
      selectedMovieToDisplay,
      selectedCustomer
    } = this.state;

    if (!selectedMovieToDisplay || !selectedCustomer) {
      return;
    }

    const url = `http://localhost:3000/rentals/${selectedMovieToDisplay}/check-out?customer_id=${selectedCustomer.id}`;

    axios.post(url)
      .then((response) => {
        console.log(response);
        console.log("success!");
        this.setState({
          showNotification: true
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleNotificationClick = () => {
    this.setState({
      showNotification: false
    });
  }

  render() {
    const customerName = this.state.selectedCustomer && this.state.selectedCustomer.name;

    return (

      <Router>
        <div className="App">

          <div className="Title">
            <h4>
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
              Zippy Rentalz
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
            </h4>



            <div className="Navbar">
              <ul>
                <div className="Links">
                  <li><Link to="/">Home <FontAwesomeIcon icon={faBolt}/></Link></li>

                  <li><Link to="/customer">Customers <FontAwesomeIcon icon={faBolt}/></Link></li>
                  <li><Link to="/library">Library <FontAwesomeIcon icon={faBolt}/></Link></li>
                  <li><Link to="/search">Search <FontAwesomeIcon icon={faBolt}/></Link></li>

                </div>
              </ul>


              <div className="">
                Selected Movie: {this.state.selectedMovieToDisplay}
              </div>

              <div className="">
                Selected Customer: {customerName}
              </div>

              <CheckoutRental
                onClick={this.handleCheckoutClick}
              />


            </div>

            <div className="showNotification">
            {this.state.showNotification && (
              <Notification
                onClick={this.handleNotificationClick}
              >
                 Successfully checked out {this.state.selectedMovieToDisplay} to {customerName}
              </Notification>
            )}

            </div>



            <div className="Lists">

              {/* Routes will go here */}
              <Route path="/" exact={true} component={Home} />
              <Route path="/customer" component={() => <CustomerData selectCustomer={this.selectCustomer} /> } />

              <Route path="/library" component={() => <Library selectMovie={this.selectMovie} />} />
              <Route path="/search" component={SearchContainer} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
