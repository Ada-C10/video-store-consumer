import React, { Component } from 'react';
import './App.css';
import Library from './components/Library';

class App extends Component {
  render() {
    return (
      <section>
        <header className="header">
          <nav>
            <a href="/html/">HTML</a> |
            <a href="/css/">CSS</a> |
            <a href="/js/">JavaScript</a> |
            <a href="/jquery/">jQuery</a>
          </nav>
        </header>
        <Library/>
      </section>
    );
  }
}

export default App;
