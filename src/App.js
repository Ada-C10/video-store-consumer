import React, { Component } from 'react';
import './App.css';
import Library from './components/Library';

class App extends Component {
  render() {
    return (
      <section>
        <header className="header">
          <nav>
            <a href="/library/">Library</a> |
            <a href="/checkout/">Checkout</a> |
            <a href="/search/">Search</a> |
            <a href="/customers/">Customers</a>
          </nav>
        </header>
        <Library/>
      </section>
    );
  }
}

export default App;
