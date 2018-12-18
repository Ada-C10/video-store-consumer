import React, { Component } from 'react';
import NewRental from './components/NewRental';
import { Route } from 'react-router-dom'
import SearchLink from './components/SearchLink';
import LibraryLink from './components/LibraryLink';
import CustomersLink from './components/CustomersLink';
import Nav from './components/Nav';


class App extends Component {

  render() {

    const testData = {
      selectedCustomer: "Felini",
      selectedMovie: "8 1/2",
    }

    return (
      <div>
        <div className="video-store">
        <header>

        <div>
        <Nav />
        </div>

        <div>
        <NewRental selectedCustomer={testData.selectedCustomer} selectedMovie={testData.selectedMovie}/>
        </div>
        </header>

        <div>
        Status Bar goes here.
        </div>
      </div>
      </div>
    );
  }
}

export default App;
