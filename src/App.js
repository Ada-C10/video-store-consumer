import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import RentalLibrary from './component/RentalLibrary';
import AllCustomers from './component/AllCustomers'
import SearchBar from './component/SearchBar'
import CheckOut from './component/CheckOut'

import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        isReavelad: false,
        currentCustomer: {}
      }
    }

  onCheckOutCallback = (customer) => {
    console.log(customer);
    this.setState({
      currentCustomer: customer
    })
    console.log(this.state.currentCustomer);
  }



  render() {
      console.log(this.state.currentCustomer);
    return (
      <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/library" >All Movies</Link></li>
              <li><Link to="/customer" >Customer List</Link></li>
              <li><SearchBar /></li>
              <li><CheckOut
                  updatedMovieCallback={this.updatedMovie}
                  currentCustomer={this.state.currentCustomer} />
              </li>
            </ul>

          </nav>

          <div>
            <Route path="/search" component={SearchBar} />
          </div>

          <div>
            <Route path="/customer"
            render={() =>
              <AllCustomers
              updatedCustomerCallback={this.onCheckOutCallback}
              />
            }
            />
          </div>

          <div>
            <Route path="/library" component={RentalLibrary} />
          </div>

          </div>
        </Router>

      </div>
    );
  }
}



export default App;
