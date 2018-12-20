import React, { Component } from "react";
import logo from "./dog-logo.svg";
import "./App.css";
import { xmastree } from "./xmastree.gif";
import RentalManager from "./components/RentalManager";

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
      <div className="video-store-main">
        <header className="main-header">
          <img
            className="App-logo"
            src={
              "http://icons.iconarchive.com/icons/shin-ui/christmas/128/gift-icon.png"
            }
            alt="xmas present"
          />
          <img
            className="header-art"
            src={require("./xmastree.gif")}
            alt="xmas tree"
          />
          <img className="header-art" src={logo} alt="logo" />
          <img
            className="header-art"
            src={require("./xmastree.gif")}
            alt="xmas tree"
          />
          <img
            className="App-logo"
            src={
              "http://icons.iconarchive.com/icons/shin-ui/christmas/128/gift-icon.png"
            }
            alt="xmas present"
          />
          <div className="header__controls">
            <h1 className="App-title">Bonkers Holiday Videos</h1>
          </div>
        </header>

        <RentalManager changeMessageCallback={this.changeMessage} />
      </div>
    );
  }
}

export default App;
