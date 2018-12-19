import React, { Component } from "react";
// import logo from "./dog-logo.svg";
import "./App.css";
import { logo } from "./doghat.jpg";
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
      <div className="video-store">
        <header className="header">
          <img
            className="header-art"
            src="http://icons.iconarchive.com/icons/designbolts/free-multimedia/96/Film-icon.png"
          />
          {
            // {<img className="logo" src={require("./doghat.jpg")} alt="logo" />}
          }{" "}
          <img
            className="header-art"
            src="http://icons.iconarchive.com/icons/designbolts/free-multimedia/96/Film-icon.png"
          />
          <div className="header__controls">
            <h1 className="App-title">Bonkers Video</h1>
          </div>
        </header>

        <RentalManager changeMessageCallback={this.changeMessage} />
      </div>
    );
  }
}

export default App;
