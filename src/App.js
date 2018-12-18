import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CustomerList from './Components/CustomerList'
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


        // handleAddMovie = () => {
        //
        // };
        //
        // handleAddCustomer = () => {
        //
        // };



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
                        <div>CurrentCustomerField</div>
                        <div>CurrentMovieField</div>
                        <button>CheckOutButton</button>
                    </section>
                </header>
                <section className="component">



                <Route path="/customers"
                       render={(props) => <CustomerList {...props }
                       state={this.state.customers}/>}
                />
                </section>
            </div>

    );
  }
}

export default App;
