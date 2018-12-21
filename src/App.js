import React, { Component } from 'react';
import cassette from "./cassette.svg";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cassette} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
