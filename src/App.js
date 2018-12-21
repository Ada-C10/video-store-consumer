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
      selectedCustomerId: 1,
    };
  }

  selectCustomer = (fullName, id) => {
    this.setState({selectedCustomer: {fullName}});
    this.setState({selectedCustomerId: {id}});
  }

  showSelectedMovie = (title) => {
    this.setState({selectedMovie: {title}});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar displayedMovie={this.state.selectedMovie} selectedCustomer={this.state.selectedCustomer}
              selectedCustomerId={this.state.selectedCustomerId} />
          </header>

          <Route path="/" exact component={Home} />
          <Route path="/library/"
            render={(props) => <Library {...props} displaySelectedMovie={this.showSelectedMovie} />}
            />
          <Route path="/search/" component={Search} />
          <Route path="/customers/" render={() => <CustomerList selectCustomerCallback={this.selectCustomer}/> } />
        </div>

      </Router>

    );
  }
}

export default App;
