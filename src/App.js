import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Customers from './Components/Customers';
import Library from './Components/Library';
import Search from './Components/Search';
import StatusBar from './Components/StatusBar';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.resetState()
  }

  resetState = () => {
    return {
      selectedCustomer: undefined,
      selectedMovie: undefined
    }
  };

  url = "http://localhost:3000/";

  selectMovie = (movie) => {
    this.setState({
      selectedMovie: movie
    });
    this.setStatusMessage(`Selected movie ${movie.title}.`);
    window.scrollTo(0, 0);
  };

  selectCustomer = (customer) => {

    this.setState({
      selectedCustomer: customer
    });
    this.setStatusMessage(`Selected customer ${customer.name}.`);
    window.scrollTo(0, 0);
  };

  addMovie = (movie) => {

    const addMovieURL = this.url + 'movies';

    axios.post(addMovieURL, {id: movie.external_id})
    .then(() => {
      this.setStatusMessage(`Successfully added ${movie.title} to rental library`);
    })
    .catch((error) => {
      this.setStatusMessage(`${error}. Cound not add ${movie.title} to rental library.`);
    })
    window.scrollTo(0, 0);
  };

  setStatusMessage = (message) => {
    this.setState({status: message});
  }

  clearStatusMessage = () => {
    this.setState({status: undefined});
  }

  checkoutMovie = () => {
    if (this.state.selectedMovie && this.state.selectedCustomer) {
      const rentalUrl = this.state.selectedMovie ?
      `${this.url}rentals/${this.state.selectedMovie.title}/check-out?` :
      `${this.url}rentals/:title/check-out`;

      const customerId = this.state.selectedCustomer ?
      this.state.selectedCustomer.id : 0;

      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 7);

      const movie = this.state.selectedMovie.title;
      const customer = this.state.selectedCustomer.name;

      axios.post(rentalUrl, {customer_id: customerId, due_date: dueDate})
      .then(() => {
        this.setStatusMessage(`Successfully checked out ${movie} to ${customer}`);
        this.setState(
          this.resetState(),
        )
      })
      .catch((error) => {
        this.setStatusMessage(`Unable to check out ${movie} to ${customer}. ${error}`);
      })
    } else {
      this.setStatusMessage(`Need to select a movie and customer.`);
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className='top-bar'>
              <ul className='nav-links'>
                <li>
                  <Link to="/search"><img className="navbar__icon" src=
                    "https://adagold.github.io/video-store-consumer/static/media/magnifying-glass-search.6c42d201.svg"/>
                  <p>Search</p></Link>
                </li>
                <li>

                  <Link to="/library"><img className="navbar__icon"
                    src="https://adagold.github.io/video-store-consumer/static/media/film-reel.6794d2f3.svg"/>
                  <p>Library</p></Link>
                </li>
                <li>
                  <Link to="/customers"><img className="navbar__icon"
                    src="https://adagold.github.io/video-store-consumer/static/media/people.2aa64ca8.svg"/>
                  <p>Customers</p></Link>
                </li>
              </ul>
              <section className="rentalDisplay">
                <div>
                  <p className="rental-selection__label">Selected Movie</p>
                  {this.state.selectedMovie &&
                    <p className="rental-selection__name">{this.state.selectedMovie.title}</p>}
                </div>
                <div>
                  <p className="rental-selection__label">Selected Customer</p>
                  {this.state.selectedCustomer &&
                    <p className="rental-selection__name">{this.state.selectedCustomer.name}</p>}
                </div>
                <div>
                  <button onClick={this.checkoutMovie}>Check Out New Rental</button>
                </div>
              </section>
            </div>

            <div className="status-bar">
              {this.state.status &&
                <StatusBar message={this.state.status} clearMessageCallback={this.clearStatusMessage} />}
                </div>

                <Route path="/search"
                  render={() => <Search baseUrl={this.url}
                  addMovieCallback={this.addMovie}
                  setStatusMessageCallback={this.setStatusMessage} />}
                  />
                <Route
                  path="/library"
                  render={() => <Library selectMovieCallback={this.selectMovie}
                  baseUrl={this.url} setStatusMessageCallback={this.setStatusMessage}/>}
                  />
                <Route
                  path="/customers"
                  render={() => <Customers selectCustomerCallback={this.selectCustomer}
                  baseUrl={this.url} setStatusMessageCallback={this.setStatusMessage}/>}
                  />
              </div>
            </Router>



          </div>
        );
      }
    }

    export default App;
