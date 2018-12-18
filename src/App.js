import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoStore from './components/VideoStore'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <section>
            <Route exact={true} path="/VideoStore" component={VideoStore}/>
          </section>
          <Link to="/VideoStore">Something</Link>
        </div>
      </Router>
    );
  }
}

export default App;
