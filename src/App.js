import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CustomerList from './Components/CustomerList'
import SelectedCustomer from "./Components/SelectedCustomer";
// import Movie from './Components/movie'
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            movies: [],
            currentCustomer: '',
            currentMovie: '',
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

                this.setState({
                    customers,
                })
            })
            .catch((error) => {
                console.log('errors:', error.message);
                this.setState ({
                    errorMessage: error.message
                });
            });
    }

    onSelectCustomer = (customerId) => {
        console.log('cust id in customerlist compo', customerId);
        const selectedCust = this.state.customers.find((customer) =>{
            return customer.id === customerId;
        });
        console.log('selected cust', selectedCust);
        if (selectedCust) {
            this.setState({
                currentCustomer: selectedCust,
            });
        }
    };

  render() {
    return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Rent-O-Rama</h1>
                    <nav className="nav-bar">
                        <p><Link to="/movies" className="nav-bar-item">Movies</Link></p>
                        <p><Link to="/customers" className="nav-bar-item">Customers</Link></p>
                    </nav>
                    <section className="search-bar">SearchBarComponentHere</section>
                    <section className="rental-info-fields">
                        <div className="selected-item"><p>Current Customer:</p>
                            <p>{this.state.currentCustomer.name}</p>
                        </div>
                        <div>CurrentMovieField</div>
                        <button>CheckOutButton</button>
                    </section>
                </header>
                <section className="component">
                <Route path="/customers"
                       render={() => <CustomerList
                           customers={this.state.customers}
                           onSelectCallback={this.onSelectCustomer}
                       state={this.state.customers}/>}

                />
                </section>
            </div>

    );
  }
}

export default App;
