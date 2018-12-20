import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import {
  Alert,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
} from 'reactstrap';
import MovieLibrary from './components/MovieLibrary.js';
import CustomerLibrary from './components/CustomerLibrary.js';
import Search from './components/Search.js';
import Rental from './components/Rental.js';
import StatusBar from './components/StatusBar.js';

// const libraryConst = () => (
//   <div>
//     <MovieLibrary />
//   </div>
// );

// const customerConst = () => (
//   <div>
//     <CustomerLibrary />
//   </div>
// );

const searchConst = () => (
  <div>
    <Search/>
  </div>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      selectedMovie: "None",
      selectedCustomer: "None",
      makeRentalUrl: "http://localhost:3000/rentals/:title/check-out",
    };
  }

  customerCount = (allCustomers) => {
    const newMessage = `Successfully loaded ${allCustomers} customers`;

    console.log(`New Status = ${newMessage}`);

    this.setState({
      message: newMessage,
    });
  }

  movieCount = (allMovies) => {
    const newMessage = `Successfully loaded ${allMovies} movies from the rental library`;

    console.log(`New Status = ${newMessage}`);

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

  rentalsCustomer = (customerName) => {
    console.log(`Selected customer = ${customerName}`);
    this.setState({
      selectedCustomer: customerName,
    });
  }

  makeRental = () => {
    const ready = (this.state.selectedMovie !== "None" && this.state.selectedCustomer !== "None");
    if (ready) {
      console.log("rental is ready");
      this.setState({
        message: `Successfully checked out ${this.state.selectedMovie} to ${this.state.selectedCustomer}`,
      });
      return (
        <Rental
          movie={this.state.selectedMovie}
          customer={this.state.selectedCustomer}
          />
      )
    }

    this.setState({
      selectedMovie: "None",
      selectedCustomer: "None",
    });
  }


  render() {

    return (
      <div className="outer-container">
        <Navbar className="nav-bar" color="light" light expand="lg">
          <Nav className="ml-auto" navbar>
            <NavItem className="nav__links">
              <NavLink tag={Link} to="/movies">Movie Library</NavLink>
            </NavItem>
            <NavItem className="nav__links">
              <NavLink tag={Link} to="/customers">Customers</NavLink>
            </NavItem>
            <NavItem className="nav__links">
              <NavLink tag={Link} to="/search">Search</NavLink>
            </NavItem>
            <NavItem className="nav__links">
              <div>{this.state.selectedMovie}</div>
            </NavItem>
            <NavItem className="nav__links">
              <div>{this.state.selectedCustomer}</div>
            </NavItem>
            <NavItem className="nav__links">
              <div>
                <Button onClick={this.makeRental}>Check Out New Rental</Button>
              </div>
            </NavItem>
          </Nav>
        </Navbar>
        <div className="status-bar status-bar--success">
          <Alert color="success">
            <StatusBar className="status-br__text" status={this.state.message}/>
          </Alert>
        </div>

        <Route path="/movies"
          render={ (props) => <MovieLibrary {...props}
          movieCountCallback={this.movieCount}
          grabMovieTitleCallback={this.rentalsMovie} /> }
          />
        <Route path="/customers"
          render={ (props) => <CustomerLibrary {...props}
          customerCountCallback={this.customerCount}
          grabCustomerNameCallback={this.rentalsCustomer} /> }
          />
        <Route path="/search" component={searchConst}/>
      </div>

    )
  }
}

export default App;
