import React, { Component } from 'react';
import './App.css';
import CustomersCollection from './components/CustomersCollection.js';
import RentalLibrary from './components/RentalLibrary.js';
import SearchBar from './components/SearchBar.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


//const Customers1 = () => <h2>customers</h2>;



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedMovie: {},
    }
  }

  handleSelectMovie = (id, title) => {
    this.setState({ //make custom object
      selectedMovie: {
        id, //equal to id: id
        title,
      }
    });
  }

  render() {
    return (

      <Router>

      <div className="App">
      <h1>{this.state.selectedMovie.title}</h1>
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
        <Route
          path="/library"
          render={() => <RentalLibrary onSelectMovie={this.handleSelectMovie} />}
        />
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
