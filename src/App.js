import React, { Component } from 'react';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="video-store">
        <header>
          <div>
            Nav-bar goes here || New-Rental Bar goes here
          </div>
          <div>
            Status Bar goes here.
          </div>
        </header>
      </div>
    );
  }
}

export default App;
