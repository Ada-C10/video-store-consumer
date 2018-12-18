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

        <Link to={'/customers'}>Customers</Link>
        <Route path="/customers" component={CustomersCollection }/>
        <Link to={'/library'}>Rental Library</Link>
        <Route path="/library" component={RentalLibrary }/>

        <section className="search-bar">
          <SearchBar onSearchChange={this.onSearchChange} />
        </section>
        
        <Link to={'/search'}>Search Bar </Link>
        <Route path="/search" component={ SearchBar }/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    </Router>
    );
  }
}

export default App;
