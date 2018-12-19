import React, { Component } from "react";
import logo from "./dog-logo.svg";
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
          <img
            className="header-art"
            src="http://icons.iconarchive.com/icons/designbolts/free-multimedia/96/Film-icon.png"
          />
          {<img src={logo} className="header-art" alt="logo" />}
          <img
            className="header-art"
            src="http://icons.iconarchive.com/icons/designbolts/free-multimedia/96/Film-icon.png"
          />
          <div className="header__controls">
            <h1 className="App-title">Bonkers Video</h1>
          </div>
        </header>
        <p className="App-intro">{this.state.message}</p>

        <RentalManager changeMessageCallback={this.changeMessage}/>
      </div>
    );
  }
}

export default App;
