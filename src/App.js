import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Library from './components/Library'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import VideoCollection from './components/VideoCollection'

import CustomerCollection from './components/CustomerCollection';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        </header>
        <Library />
      </div>
    );
  }
}

export default App;
