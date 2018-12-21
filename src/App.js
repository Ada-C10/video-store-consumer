import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import axios from 'axios';

import Home from './components/Home';
import Customers from './components/Customers';
import Library from './components/Library';
import Search from './components/Search';

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentMovie: "none",
      currentCustomerName: "none",
      currentCustomerID: 0,
      messages: [],
    }
  }

  setMovies = (movies) => {
    this.setState({ movies : movies });
  }

  selectMovie = (title) => {
    this.setState({currentMovie: title})
  }

  selectCustomer = (customer) => {
    this.setState({
      currentCustomerName: customer["name"],
      currentCustomerID: customer["id"]})
  }

  rental = () => {
    const rentalURL = `http://localhost:3000/rentals/${this.state.currentMovie}/check-out`;

    let dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);

    const rental = {
      customer_id: this.state.currentCustomerID,
      due_date: dueDate,
    }

    axios.post(rentalURL, rental)
    .then(() => {

      const message = `Successfully checked out ${this.state.currentMovie} to ${this.state.currentCustomerName}`;

      this.setState({ messages: [message] })
    })
    .catch((error) => {
      this.setState({messages: [...this.state.messages, error.message]});
    })
  }

  addMovie = (movie) => {

  const ADD_MOVIE_URL = `http://localhost:3000/movies`;

    axios.post(ADD_MOVIE_URL, movie)
    .then(() => {
      const message = `Successfully added ${movie.title} to the library`;
      this.setState({
        messages: [message] });
    })
    .catch((error) => {
      this.setState({ messages: [...this.state.messages, error.message] });
    })
  }

  replaceMessage = (error) => {
    this.setState({messages: [error]});
  }

  render() {

    const messages = this.state.messages.map((message, i) => {
      return <li key={i}>{message}</li>;
    })

    return (
      <Router>
        <div>
          <ul className="nav-bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li className="nav-bar__list-item">
              Selected Movie: {this.state.currentMovie}
            </li>
            <li className="nav-bar__list-item">
              Selected Customer: {this.state.currentCustomerName}
            </li>
            <li>
              <button
                type="button"
                onClick={this.rental}
              >
                Checkout
              </button>
            </li>
          </ul>

          <section>
            <ul>
              {messages}
            </ul>
          </section>
          <hr />

          <Route exact path="/" component={Home} />
          <Route
            path="/customers"
            render={(props) => <Customers {...props}
            selectCustomer={ (customer) => this.selectCustomer(customer)}
            replaceMessage = {this.replaceMessage}/>}
            />
          <Route
            path="/library"
            render={(props) => <Library {...props}
            selectMovie={ (title) => this.selectMovie(title)}
            replaceMessage = {this.replaceMessage}/>}
          />
        <Route exact path="/search"
           render={(props) => <Search {...props}
           addMovie={ (movie) => this.addMovie(movie)}
           replaceMessage = {this.replaceMessage}
          />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
