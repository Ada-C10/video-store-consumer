import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Videoflix</h1>
        </header>
        <main>
          <Dashboard className="Dashboard"/>
        </main>
      </div>
    );
  }
}

export default App;
