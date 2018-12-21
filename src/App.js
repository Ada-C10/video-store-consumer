import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Alert } from 'reactstrap';
import MovieLibrary from './components/MovieLibrary.js';
import CustomerLibrary from './components/CustomerLibrary.js';
import Search from './components/Search.js';
import Rental from './components/Rental.js';
import StatusBar from './components/StatusBar.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      selectedMovie: "None",
      selectedCustomerId: 0,
      selectedCustomer: "None",
    };
  }

  changeMessage = (newMessage) => {
    this.setState({
      message: newMessage,
    });
  }

  rentalsMovie = (movieTitle) => {
    console.log(`Selected movie = ${movieTitle}`);
    this.setState({
      selectedMovie: movieTitle,
    });
  }

  rentalsCustomer = (customerName, customerId) => {
    console.log(`Selected customer = ${customerName}`);
    this.setState({
      selectedCustomer: customerName,
      selectedCustomerId: customerId,
    });
  }

  render() {

    return (
      <div className="main-container">
        <header>
          <h2 className="app_name">Videobuster</h2>
          <div className="nav">
            <div className="nav-item1">
              <Link to="/" className="vhs">Movie Library</Link>
            </div>
            <div className="nav-item2">
              <Link to="/customers" className="cust">Customers</Link>
            </div>
            <div className="nav-item3">
              <Link to="/search" className="searchbar">Search</Link>
            </div>
          </div>
        </header>
        <Rental
          movie={this.state.selectedMovie}
          customer={this.state.selectedCustomer}
          customerId={this.state.selectedCustomerId}
          rentalCallback={this.changeMessage}/>
        <div className="status-bar">
          <Alert color="success">
            <StatusBar className="status-br__text" status={this.state.message} />
          </Alert>
        </div>

        <Route exact path="/"
          render={ (props) => <MovieLibrary {...props}
          movieCountCallback={this.changeMessage}
          grabMovieTitleCallback={this.rentalsMovie} /> }
          />
        <Route exact path="/customers"
          render={ (props) => <CustomerLibrary {...props}
          customerCountCallback={this.changeMessage}
          grabCustomerNameCallback={this.rentalsCustomer} /> }
          />
        <Route exact path="/search"
          render={ (props) => <Search {...props}
          searchCallback={this.changeMessage} /> }
          />
      </div>

    )
  }
}

export default App;
