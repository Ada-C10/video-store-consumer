import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import MovieLibrary from './components/MovieLibrary.js';
import CustomerLibrary from './components/CustomerLibrary.js';
import Search from './components/Search.js';
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

  makeRental = () => {
    this.setState({
      isRentalReady: (this.state.selectedMovie != "" && this.state.selectedCustomer != "")
    });
    console.log(this.state.isRentalReady);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/movies">Movie Library</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li>Selected Movie</li>
          <li>Selected Customer</li>
          <button onClick={makeRental}>Check Out New Rental</button>
        </ul>
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
