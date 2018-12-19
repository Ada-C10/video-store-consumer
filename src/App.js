import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RentalManager from "./components/RentalManager";

class App extends Component {
  render() {
    return (
      <div className="video-store">
        <header className="header">
          <div className="header__controls">
            {" "}
            <h1 className="App-title">Bonkers Video!</h1>
          </div>
        </header>
        <p className="navbar__nav" />
        <br />

        <RentalManager />
      </div>
    );
  }
}

export default App;
{
  // <img src={logo} className="App-logo" alt="logo" />
}
