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
      <div className="outer-container">
        <Navbar className="nav-bar" color="light" light expand="lg">
          <Nav className="ml-auto" navbar>
            <NavItem className="nav__links">
              <NavLink tag={Link} to="/">Movie Library</NavLink>
            </NavItem>
            <NavItem className="nav__links">
              <NavLink tag={Link} to="/customers">Customers</NavLink>
            </NavItem>
            <NavItem className="nav__links">
              <NavLink tag={Link} to="/search">Search</NavLink>
            </NavItem>
            <div className="rental">
              <Rental
                  movie={this.state.selectedMovie}
                  customer={this.state.selectedCustomer}
                  customerId={this.state.selectedCustomerId}
                  rentalCallback={this.changeMessage}/>
            </div>
          </Nav>
        </Navbar>

        <div className="status-bar status-bar--success">
          <Alert color="success">
            <StatusBar className="status-br__text" status={this.state.message}/>
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
        <Route exact path="/search" component={searchConst}/>
      </div>

    )
  }
}

export default App;
