import React, { Component } from 'react';
import './App.css';
import Library from './components/Library';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <header className="header">
            <nav>
              <ul>
                <li><Link to="/library/">Library</Link></li>
                <li><Link to="/checkout/">Checkout</Link></li>
                <li><Link to="/search/">Search</Link></li>
                <li><Link to="/customers/">Customers</Link></li>
              </ul>
            </nav>
          </header>
          <Library/>
        </section>
      </Router>
    );
  }
}

export default App;
