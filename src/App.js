import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoStore from './components/VideoStore'
import VideoCollection from './components/VideoCollection'
import CustomerCollection from './components/CustomerCollection'
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
            <Route exact={true} path="/VideoCollection" component={VideoCollection}/>
            <Link to="/VideoCollection">Library</Link>
            <Route exact={true} path="/CustomerCollection" component={CustomerCollection }/>
            <Link to="/CustomerCollection">Customers</Link>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
