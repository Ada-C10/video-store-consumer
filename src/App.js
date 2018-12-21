import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Library from './components/Library';
import CustomerList from './components/CustomerList';
import Search from './components/Search';
import Home from './components/Home';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: "None",
      selectedCustomer: "None",
    };
  }

  showSelectedMovie = (movie) => {
    console.log(`App - selected movie is ${movie}`);
    this.setState = ({
      selectedMovie: movie,
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar displayedMovie={this.state.selectedMovie}/>
          </header>

          <Route path="/" exact component={Home} />
          <Route path="/library/"
            render={(props) => <Library {...props} displaySelectedMovie={this.showSelectedMovie} />}
              />
          <Route path="/search/" component={Search} />
          <Route path="/customers/" component={CustomerList} />
        </div>

      </Router>

    );
  }
}

export default App;
