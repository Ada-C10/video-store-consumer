import React, { Component } from 'react';
import NewRental from './components/NewRental';
import { Route } from 'react-router-dom'
import Nav from './components/Nav';


class App extends Component {

  render() {

    const testData = {
      selectedCustomer: "Felini",
      selectedMovie: "8 1/2",
    }

    return (
      <div className="video-store">
          <header>
            <h1>Scarecrow Video</h1>
            <div>
              <Nav />
              <NewRental selectedCustomer={testData.selectedCustomer} selectedMovie={testData.selectedMovie}/>
            </div>
          </header>
          <span>Status Bar goes here.</span>

      </div>
    );
  }
}

export default App;
