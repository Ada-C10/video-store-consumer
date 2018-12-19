import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { Route, Link} from 'react-router-dom';
import CustomerList from './Components/CustomerList'
// import SelectedCustomer from "./Components/SelectedCustomer";
// import Movie from './Components/movie'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            movies: [],
            currentCustomer: '',
            currentMovie: '',
            message: '',
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3000/customers")
            .then((response) => {
                console.log('response', response.data);
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
                })
            })
            .catch((error) => {
                console.log('errors:', error.message);
                this.setState ({
                    message: error.message
                });
            });
    }

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
        const customerId = this.state.currentCustomer.id;
        const movieTitle = this.state.currentMovie.name;
        console.log('creating rental for:', customerId, movieTitle);
        axios.post(`http://localhost:3000/rentals/${movieTitle}/checkout?customer=${customerId}`)
            .then((response) => {
                console.log('rental created');
            })
            .catch((error) => {
                console.log('errors', error.message);
                this.setState({
                    errorMessage: `Failure! ${error.message}`,
                })
            });
    };

  render() {
    return (
            <div className="video-store">
                <header className="header">
                    <section className="header-controls">
                        <div className="navbar navbar-fixed-top">
                            <nav className="nav-links">
                                <Link to="/movies" className="movie-item">
                                    <button type="button"
                                            className="navbar-btn btn btn-default">
                                        Movies</button>
                                </Link>
                                <Link to="/customers" className="customer-item">
                                    <button type="button"
                                            className="navbar-btn btn btn-default">
                                        Customers</button>
                                </Link>
                                <form className="navbar-form navbar-left" role="search">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search"/>
                                    </div>
                                    <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
                                </form>
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
                                <p>Customer Placeholder{this.state.currentMovie.title}</p>
                            </div>
                            <button className="btn btn-success">Check Out Rental</button>
                        </div>
                    </section>

                    <section className="alert alert-info">
                        {this.state.message}
                    </section>
                </header>




                <section className="container">
                    <div className="jumbotron">
                        <Route path="/customers"
                               render={() => <CustomerList
                                   customers={this.state.customers}
                                   onSelectCallback={this.onSelectCustomer}
                               state={this.state.customers}/>}

                        />
                    </div>
                </section>
            </div>

    );
  }
}

export default App;
