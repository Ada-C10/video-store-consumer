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
      Messages: [],
      movies: []
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

      this.setState({ Messages: [message] })
    })
    .catch((error) => {
      this.setState({Messages: [...this.state.Messages, error.message]});
    })
  }

  render() {

    const Messages = this.state.Messages.map((message, i) => {
      return <li key={i}>{message}</li>;
    })

    return (
      <Router>
        <div>
          <ul>
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
            <li>
              Selected Movie: {this.state.currentMovie}
            </li>
            <li>
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
              {Messages}
            </ul>
          </section>
          <hr />

          <Route exact path="/" component={Home} />
          <Route
            path="/customers"
            render={(props) => <Customers {...props}
            selectCustomer={ (customer) => this.selectCustomer(customer)}/>}
            />
          <Route
            path="/library"
            render={(props) => <Library {...props}
            selectMovie={ (title) => this.selectMovie(title)}
            setMovies = { (movies) => this.setMovies(movies)}
            movies = {this.state.movies} />}
          />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
