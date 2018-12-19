import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import RentalManager from "./components/RentalManager";
import MessageBar from "./components/MessageBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { message: "" };
  }

  changeMessage = message => {
    this.setState({ message });
  };

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

        <p className="App-intro">Customers</p>
        <MessageBar message={this.state.message} />
        <RentalManager changeMessageCallback={this.changeMessage} />
      </div>
    );
  }
}

export default App;
{
  // <img src={logo} className="App-logo" alt="logo" />
}
