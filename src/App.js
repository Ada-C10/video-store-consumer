import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { Route, Link} from 'react-router-dom';
import RentalList from './Components/RentalList'
import CustomerList from './Components/CustomerList'
import SearchCollection from './Components/SearchCollection';
import Library from './Components/Library';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faHome, faFilm, faChevronCircleDown, faChevronCircleUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUsers, faHome, faFilm, faChevronCircleDown, faChevronCircleUp, faSearch);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            movies: [],
            rentals: [],
            overDueRentals: [],
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
                    const addRental = {...rental};
                    return addRental
                });

                const count = Object.keys(rentals).length;
                if (count > 0) {
                    this.setState({
                        rentals,
                        message: `Successfully loaded ${count} rentals`
                    });
                } else {
                    this.setState({
                        rentals,
                        message: `There are no active rentals in the database.`
                    });
                }

            })
            .catch((error) => {
                console.log('errors:', error.message);
                this.setState({
                    message: error.message
                })
            });
    };

    fetchOverdueRentalData = () => {
        console.log('fetching rentals');
        axios.get("http://localhost:3000/rentals/overdue")
            .then((response) => {
                console.log('response rents', response.data);
                const overDueRentals = response.data.map((rental) => {
                    console.log(response.data);
                    const addODRental = {...rental};
                    return addODRental
                });

                const count = Object.keys(overDueRentals).length;
                if (count > 0) {
                    this.setState({
                        overDueRentals,
                        message: `Successfully loaded ${count} rentals`
                    });
                } else {
                    this.setState({
                        overDueRentals,
                        message: `There are no overdue rentals in the database.`
                    });
                }

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
            message: 'Welcome to Rent-O-Rama!'
        })
    };

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
        // console.log('cust id in customerlist compo', customerId);
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
                console.log('status', response.data.status);
                let status = response.data.status;
                this.setState({
                    message: `${status}: Rental successfully created for ${this.state.currentCustomer.name} - ${this.state.currentMovie.title}`
                });
            })
            .catch((error) => {
                console.log('errors', error.message);
                this.setState({
                    errorMessage: `Failure! ${error.message}`,
                })
            });
    };

    onReturnRental = (returnRentalId) => {
        console.log(returnRentalId);
        const selectedRental = this.state.rentals.find((rental) => {
            return rental.id === returnRentalId;
        });
        const customer_id = selectedRental.customer_id;
        const title = selectedRental.title;
        const payLoad = {customer_id};
        console.log('rental to return', selectedRental);
        axios.post(`http://localhost:3000/rentals/${title}/return`, payLoad)
            .then((response) => {
                const status = response.data.status;
                this.setState({
                    message: `${status}: Rental successfully returned for ${selectedRental.name} - ${selectedRental.title}`
                });
            })
            .catch((error) => {
                console.log('errors', error.message);
                this.setState({
                    errorMessage: `Failure! ${error.message}`,
                })
            });
    };

    render() {
        // console.log('movies', this.state.movies);
        // console.log('customers', this.state.customers);
        return (
            <div className="video-store">
                <header className="header">
                    <section className="header-controls navbar-fixed-top">
                        <div className="navbar">
                            <nav className="nav-links">
                                <div id="button-icons">
                                    <Link to="/library" className="icon-item"
                                          onClick={this.fetchMoviesData}>
                                        <button type="button"
                                                className="navbar-btn btn btn-default">
                                            <FontAwesomeIcon icon="film" size='2x'/>
                                        </button>
                                    </Link>
                                    <Link to="/customers" className="icon-item"
                                          onClick={this.fetchCustomersData}>
                                        <button type="button"
                                                className="navbar-btn btn btn-default"><FontAwesomeIcon icon="users" size='2x'/>
                                        </button>
                                    </Link>
                                    <Link to="/" className="icon-item"
                                          onClick={this.fetchHome}>
                                        <button type="button"
                                                className="navbar-btn btn btn-default">
                                            <FontAwesomeIcon icon="home" size='2x'/></button>
                                    </Link>

                                    <Link to="/search" className="icon-item">
                                        <button type="button"
                                                className="navbar-btn btn btn-default">
                                            <FontAwesomeIcon icon="search" size='2x'/></button>
                                    </Link>
                                </div>

                                <div id="rental-buttons">
                                    <Link to="/rentals" className="rental-item"
                                          onClick={this.fetchOutRentalData}>
                                        <button type="button"
                                                className="navbar-btn btn btn-info">
                                            Active Rentals
                                        </button>
                                    </Link>
                                    <Link to="/overdue" className="rental-item"
                                          onClick={this.fetchOverdueRentalData}>
                                        <button type="button"
                                                className="navbar-btn btn btn-default btn-danger">
                                            Overdue Rentals
                                        </button>
                                    </Link>
                                </div>
                            </nav>
                        </div>

                        <div className="logo">

                            <p className="title">Rent-<img src="../reel-icon.svg" alt="movie reel" className="mv-reel-img"/>-Rama</p>

                        </div>

                        <div className="rental-info">
                            <div className="panel panel-info"><h6>Selected Customer:</h6>
                                <p><strong>{this.state.currentCustomer.name}</strong></p>
                            </div>
                            <div className="panel panel-info"><h6>Selected Movie:</h6>
                                <p><strong>{this.state.currentMovie.title}</strong></p>
                            </div>
                            <button className="btn btn-success"
                                    onClick={this.onConfirmRental}>Confirm Rental
                            </button>
                        </div>
                    </section>
                    <div className="messages">
                        <section className="info-alert alert alert-info alert-dismissible">
                            <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                            <strong>{this.state.message}</strong>
                        </section>
                    </div>
                </header>

                <section className="container">
                    <div className="jumbotron">
                        <Route path="/search"
                               component={SearchCollection}/>

                        <Route path="/rentals"
                               render={() => <RentalList
                                   rentals={this.state.rentals}
                                   onReturnCallback={this.onReturnRental}
                                   state={this.state.rentals}/>}
                        />

                        <Route path="/customers"
                               render={() => <CustomerList
                                   customers={this.state.customers}
                                   onSelectCallback={this.onSelectCustomer}
                                   state={this.state.customers}/>}

                        />

                        <Route path="/overdue"
                               render={() => <RentalList
                                   rentals={this.state.overDueRentals}
                                   onReturnCallback={this.onReturnRental}
                                   state={this.state.overDueRentals}/>}

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
