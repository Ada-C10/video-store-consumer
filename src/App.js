import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import {
  Collapse,
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
  Button
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
      selectedMovie: "",
      selectedCustomer: "",
      isRentalReady: false,
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

  // makeRental = () => {
  //   this.setState({
  //     isRentalReady: (this.state.selectedMovie != "" && this.state.selectedCustomer != "")
  //   });
  //   console.log(this.state.isRentalReady);
  // }

  render() {

    const makeRental = () => {
      console.log(this.state.selectedMovie);
      console.log(this.state.selectedCustomer);
      
      if (this.state.selectedMovie !== "" && this.state.selectedCustomer !== "") {
        this.setState({
          isRentalReady: true,
        });
      }

      console.log(this.state.isRentalReady);

      if (this.state.isRentalReady) {
        return <Rental customer={this.state.selectedCustomer} movie={this.state.selectedMovie} />
      }

      this.setState({
        message: `Successfully checked out ${this.state.selectedMovie} to ${this.state.selectedCustomer}`,
      });
      console.log(this.state.message);
    }

    return (
      <div>
        <Nav>
          <NavItem><Link to="/movies">Movie Library</Link></NavItem>
          <NavItem><Link to="/customers">Customers</Link></NavItem>
          <NavItem><Link to="/search">Search</Link></NavItem>
          <NavItem>Selected Movie</NavItem>
          <NavItem>Selected Customer</NavItem>
          <NavItem><button onClick={makeRental} className="p-2 bd-highlight">Check Out New Rental</button></NavItem>
        </Nav>
        <div>
          <StatusBar status={this.state.message}/>
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
    );
  }
}

export default App;
