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
  }

  render() {
    return (


      <Router>

      <div className="App">
      <nav>
      <Link to={'/search'}>Search Bar </Link>
      <Link to={'/customers'}>Customers</Link>
        <Link to={'/library'}>Rental Library</Link>
      </nav>
      <h1>{this.state.selectedMovie.title}</h1>
      <section className="search-bar">
        <Route path="/search" component={ SearchBar }/>
      </section>


      <ul>
        <li>

        <Route
          path="/customers"
          render={() => <CustomersCollection onSelectCustomer={this.handleSelectCustomer} />}
        />

        </li>

        <li>

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
//checkout pass customer id as a parameter in the api post with id in the url axios can post for you?
//urlencode the movie's title use it as the path and send the cusomer id as the parameter

export default App;
