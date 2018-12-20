import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { Route, Link} from 'react-router-dom';
import RentalList from './Components/RentalList'
import CustomerList from './Components/CustomerList'
import SearchCollection from './Components/SearchCollection';
import Library from './Components/Library';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            movies: [],
            rentals: [],
            currentCustomer: '',
            currentMovie: '',
            message: '',
        };
    }

    fetchCustomersData = () => {
        axios.get("http://localhost:3000/customers")
            .then((response) => {
                // console.log('response custs', response.data);
                const customers = response.data.map((customer) => {
                    const newCustomer = {
                        ...customer,
                        rentalCredit: customer["account_credit"],
                        moviesCheckedOut: customer["movies_checked_out_count"],

                    };
                    return newCustomer
                });

                const count = Object.keys(customers).length;

                this.setState({
                    customers,
                    message: `Successfully loaded ${count} customers`
                });
            })
            .catch((error) => {
                console.log('errors:', error.message);
                this.setState({
                    message: error.message
                })
            });
    };

    fetchMoviesData = () => {
      axios.get(`http://localhost:3000/movies`)
          .then((response) => {
              // console.log('resp movies', response.data);
              const movies = response.data.map((movie) => {
                  const newMovie = {...movie};
                  return newMovie
              });
            this.setState({
              movies,
              message: `${response.data.length} Movies loaded`
            });
          })
          .catch((error) => {
            this.setState({error: error.message})
          })
    };

    fetchOutRentalData = () => {
        console.log('fetching rentals');
        axios.get("http://localhost:3000/rentals/out")
            .then((response) => {
                console.log('response rents', response.data);
                const rentals = response.data.map((rental) => {
                    console.log(response.data);
                    const addRental = {...rental };
                    return addRental
                });

                const count = Object.keys(rentals).length;

                this.setState({
                    rentals,
                    message: `Successfully loaded ${count} rentals`
                });
            })
            .catch((error) => {
                console.log('errors:', error.message);
                this.setState({
                    message: error.message
                })
            });
    };

    fetchHome = () => {
        this.setState({
            messages: 'Welcome to Rent-O-Rama!'
        })
    }

    onSelectMovie = (movieId) => {
          console.log('', movieId);
          const selectedMovie = this.state.movies.find((movie) => {
              return movie.id === movieId;
          });
          console.log('selected movie', selectedMovie);
          if (selectedMovie) {
              this.setState({
                  currentMovie: selectedMovie,
              });
          }
      };

    onSelectCustomer = (customerId) => {
        console.log('cust id in customerlist compo', customerId);
        const selectedCust = this.state.customers.find((customer) => {
            return customer.id === customerId;
        });
        console.log('selected cust', selectedCust);
        if (selectedCust) {
            this.setState({
                currentCustomer: selectedCust,
            });
        }
    };

    onConfirmRental = () => {
        function addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
        const date = new Date(Date.now()).toLocaleString();
        const checkout = addDays(date, 7);
        const customerId = this.state.currentCustomer.id;
        const movieTitle = this.state.currentMovie.title;
        console.log('creating rental for:', customerId, movieTitle, checkout);
        axios.post(`http://localhost:3000/rentals/${movieTitle}/check-out?customer_id=${customerId}&due_date=${checkout}`)
            .then((response) => {
                console.log('rental created');
                this.setState({
                    message: `Rental successfully created for ${this.state.customer.name} - ${this.state.movie.title}`
                });
            })
            .catch((error) => {
                console.log('errors', error.message);
                this.setState({
                    errorMessage: `Failure! ${error.message}`,
                })
            });
    };

    onReturnRental = () => { };

  render() {
      // console.log('movies', this.state.movies);
      // console.log('customers', this.state.customers);
    return (
            <div className="video-store">
                <header className="header">
                    <section className="header-controls">
                        <div className="navbar navbar-fixed-top">
                            <nav className="nav-links">
                                <Link to="/library" className="library-item"
                                      onClick={this.fetchMoviesData}>
                                    <button type="button"
                                            className="navbar-btn btn btn-default">
                                        Movies</button>
                                </Link>
                                <Link to="/customers" className="customers-item"
                                      onClick={this.fetchCustomersData}>
                                    <button type="button"
                                            className="navbar-btn btn btn-default">
                                        Customers</button>
                                </Link>
                                <Link to="/" className="home-item"
                                        onClick={this.fetchHome}>
                                    <button type="button"
                                            className="navbar-btn btn btn-default">
                                        Home</button>
                                </Link>
                                <Link to="/rentals" className="rentals-item"
                                      onClick={this.fetchOutRentalData}>
                                    <button type="button"
                                            className="navbar-btn btn btn-default">
                                        Rentals</button>
                                </Link>
                                <Link to="/search" className="search-item">
                                    <button type="button"
                                            className="navbar-btn btn btn-default">
                                        <span className="glyphicon glyphicon-search"></span></button>
                                </Link>
                            </nav>
                        </div>

                        <div className="logo">
                            <img src="../reel-icon.svg" alt="movie reel" className="mv-reel-img"/>
                            <p className="title">Rent-O-Rama</p>
                            <img src="../reel-icon.svg" alt="movie reel" className="mv-reel-img"/>
                        </div>

                        <div className="rental-info">
                            <div className="selected-item"><h4>Selected Customer:</h4>
                                <p>{this.state.currentCustomer.name}</p>
                            </div>
                            <div className="selected-item"><h4>Selected Movie:</h4>
                                <p>{this.state.currentMovie.title}</p>
                            </div>
                            <button className="btn btn-success"
                                onClick={this.onConfirmRental}>Confirm Rental</button>
                        </div>
                    </section>

                    <section className="alert alert-info">
                        {this.state.message}
                    </section>
                </header>

                <section className="container">
                    <div className="jumbotron">
                        <Route path="/search"
                               component={SearchCollection}/>
                        <Route path="/rentals"
                               render={() => <RentalList
                                   rentals={this.state.rentals}
                                   onSelectCallback={this.onReturnRental}
                                   state={this.state.rentals}/>}
                               />
                        <Route path="/customers"
                               render={() => <CustomerList
                                   customers={this.state.customers}
                                   onSelectCallback={this.onSelectCustomer}
                               state={this.state.customers}/>}

                        />
                        <Route path="/library"
                               render={() => <Library
                                   movies={this.state.movies}
                                   selectedMovieCallback={this.onSelectMovie}
                               state={this.state.movies}/>}

                        />
                    </div>
                </section>
            </div>

    );
  }
}

export default App;
