import React, { Component } from 'react';
import './App.css';
import CustomersCollection from './components/CustomersCollection.js';
import RentalLibrary from './components/RentalLibrary.js';
import SearchBar from './components/SearchBar.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


//const Customers1 = () => <h2>customers</h2>;



class App extends Component {

  // state = {
  //   customers: []
  // }

  render() {
    return (

      <Router>

      <div className="App">

      <section className="search-bar">
        <SearchBar onSearchChange={this.onSearchChange} />
        <Link to={'/search'}>Search Bar </Link>
        <Route path="/search" component={ SearchBar }/>
      </section>


      <ul>
        <li>
        <Link to={'/customers'}>Customers</Link>
        <Route path="/customers" component={CustomersCollection }/>
        </li>

        <li>
        <Link to={'/library'}>Rental Library</Link>
        <Route path="/library" component={RentalLibrary }/>
        </li>
      </ul>


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    </Router>
    );
  }
}

export default App;
