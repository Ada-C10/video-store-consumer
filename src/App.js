import React, { Component } from 'react';
import './App.css';
import VideoStore from './components/VideoStore';

class App extends Component {
  render() {
    return (
      <main className="App">
        <VideoStore/>
      </main>
    );
  }
}

export default App;
