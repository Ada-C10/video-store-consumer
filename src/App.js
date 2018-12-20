import React, { Component } from 'react';
import './App.css';
import CustomersCollection from './components/CustomersCollection.js';
import RentalLibrary from './components/RentalLibrary.js';
import SearchBar from './components/SearchBar.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';


//const Customers1 = () => <h2>customers</h2>;
const checkOutRentalUrl = (title, customer_id) => {
  return `https:localhost:3000/rentals/${title}/check-out?customer_id=${customer_id};`
}

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedMovie: {},
      selectedCustomer: {},
    }
  }

  handleSelectCustomer = (name) => {
    this.setState({
      selectedCustomer: {
        name,
      }
    })
  }

  handleSelectMovie = (id, title) => {
    this.setState({ //make custom object
      selectedMovie: {
        id, //equal to id: id
        title,
      }
    });
    const movie = this.props.selectedMovie;
    const customer = this.props.selectedCustomer

    const url = checkOutRentalUrl(this.selectedMovie.title, this.selectedCustomer.id);
    axios.post(url)
      .then(() => {
        this.props.setStatus(
          `Successfully checked out ${movie.title} to ${customer.name}`,
          'success');
      })
      .catch((error) => {
        this.props.setStatus(
          `Could not check out ${movie.title} to ${customer.name}: ${error.message}`,
          'error');
      });
  }

  render() {
    return (


      <Router>

      <div className="App">

      <nav>
        <ul>
          <li>< Link to={'/customers'}>Customers</Link></li>
          <li><Link to={'/library'}>Rental Library</Link></li>
          <li><Link to={'/search'}>Search</Link></li>
        </ul>
      </nav>


      <h1>{this.state.selectedMovie.title}</h1>
      <h1>{this.state.selectedCustomer.name}</h1>

      <section className="search-bar">
        <Route path="/search" component={ SearchBar }/>
      </section>


      <section>
        <Route
          path="/customers"
          render={() => <CustomersCollection onSelectCustomer={this.handleSelectCustomer} />}
        />
      </section>

      <section>
        <Route
          path="/library"
          render={() => <RentalLibrary onSelectMovie={this.handleSelectMovie} />}
        />
      </section>

      </div>

    </Router>
    );
  }
}
//checkout pass customer id as a parameter in the api post with id in the url axios can post for you?
//urlencode the movie's title use it as the path and send the cusomer id as the parameter

export default App;
