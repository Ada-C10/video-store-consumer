import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import LibraryContainer from './components/LibraryContainer';
import SearchContainer from './components/SearchContainer';
import NewRental from './components/NewRental';
import NavBar from './components/NavBar';
import StatusBar from './components/StatusBar';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
      customer: '',
      cust_id: '',
      status: '',
    }
  }

  clearSelections = () => {
    this.setState({
      movie: '',
      customer: '',
      cust_id: '',
      status: '',
    });
  }

  select = (obj, type) => {
    let newState = this.state;
    newState[type.toLowerCase()] = obj.title ? obj.title : obj.name;
    if (obj.name) {
      newState.cust_id = obj.id;
    }

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Video Store</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NavBar />
        <NewRental
          movie={ this.state.movie }
          customer={ this.state.customer }
          cust_id={ this.state.cust_id }
          clearCB={ this.clearSelections } />
        <StatusBar status={ this.state.status } />
        <Route path="/library" render={() => <LibraryContainer type="Movie" selectCB = {this.select} />} />
        <Route path="/customers" render={() => <LibraryContainer type="Customer" selectCB = {this.select} />} />
        <Route path="/search" render={() => <SearchContainer />} />

</div>
    );
  }
}

export default App;
