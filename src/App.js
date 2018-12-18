import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NewRental from './components/NewRental';

class App extends Component {

  render() {

    const testData = {
      selectedCustomer: "Felini",
      selectedMovie: "8 1/2",
    }

    return (
      <div className="video-store">
        <header>
          <div>
            Nav-bar goes here || <NewRental selectedCustomer={testData.selectedCustomer} selectedMovie={testData.selectedMovie}/>
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
