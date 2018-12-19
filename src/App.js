import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LibraryContainer from './components/LibraryContainer';
import SearchContainer from './components/SearchContainer';
import NewRental from './components/NewRental';

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
    newState.cust_id = obj.name ? obj.id : null;

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NewRental
          movie={ this.state.movie }
          customer={ this.state.customer }
          cust_id={ this.state.cust_id }
          clearCB={ this.clearSelections } />
        <LibraryContainer selectCB={this.select} type="Movie" />
        <LibraryContainer selectCB={this.select} type="Customer" />
        <SearchContainer />
      </div>
    );
  }
}

export default App;
