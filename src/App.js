import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import CustomerList from './Components/CustomerList'
// import Movie from './Components/movie'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            movies: [],
            currentCustomer: '',
            currentMovie: '',
            viewMovies: true,
        };

        // handleAddMovie = () => {
        //
        // };
        //
        // handleAddCustomer = () => {
        //
        // };

        // componentDidMount = {
        //
        // }

    }
  render() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <section className="search-bar">SearchBarComponentHere</section>
                <section className="rental-info-fields">
                    <div>CurrentCustomerField</div>
                    <div>CurrentMovieField</div>
                    <button>CheckOutButton</button>
                </section>
                <section>MovieComponentHere</section>

                <section>CustomerComponentHere
                    <CustomerList customers={this.customers}/>
                </section>
            </div>
        </Router>
    );
  }
}

export default App;
