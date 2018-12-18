import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import NewRental from './components/NewRental';
import Nav from './components/Nav';
import LibrarySection from './components/LibrarySection';
import CustomerSection from './components/CustomerSection';
import SearchSection from './components/SearchSection';

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
          <Route path="/library" render={() => <LibrarySection />} />
          <Route path="/customers" render={() => <CustomerSection />} />
          <Route path="/search" render={() => <SearchSection />} />
      </div>
    );
  }
}

export default App;
