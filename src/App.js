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

  status = (txt) => {
    let newState = this.state;
    newState.status = txt;

    this.setState(newState);
  }

  clearStatus = () => {
    let newState = this.state;
    newState.status = '';

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-titles">
            <h1 className="App-title">Welcome to</h1>
            <h1 className="App-title App-title2">React Video Store</h1>
            <p className="App-intro">
              "To get started, edit <code>kawaii/Anime.mkv</code> and save to reload..."
            </p>
          </div>
        </header>
        <div className="uppercontainer">
          <NavBar clearCB={ this.clearStatus } />
          <NewRental
            movie={ this.state.movie }
            customer={ this.state.customer }
            cust_id={ this.state.cust_id }
            clearCB={ this.clearSelections }
            statusCB={ this.status } />
        </div>
        
        <StatusBar status={ this.state.status } />

        <Route path="/" exact="true" render={() => <LibraryContainer type="Movie" selectCB={this.select} statusCB={ this.status } />} />
        <Route path="/library" render={() => <LibraryContainer type="Movie" selectCB={this.select} statusCB={ this.status } />} />
        <Route path="/customers" render={() => <LibraryContainer type="Customer" selectCB={this.select} statusCB={ this.status } />} />
        <Route path="/search" render={() => <SearchContainer statusCB={ this.status } />} />
      </div>
    );
  }
}

export default App;
