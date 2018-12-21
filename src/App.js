import React, { Component } from "react";
import logo from "./dog-logo.svg";
import "./App.css";
import { xmastree } from "./xmastree.gif";
import xmassong from "./xmassong.mp3";
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
            className="item1"
            src={
              "http://icons.iconarchive.com/icons/shin-ui/christmas/128/gift-icon.png"
            }
            alt="xmas present"
          />
          <img
            className="item2"
            src={require("./xmastree.gif")}
            alt="xmas tree"
          />
          <img className="item3" src={logo} alt="logo" />

          <img
            className="item2"
            src={require("./xmastree.gif")}
            alt="xmas tree"
          />
          <img
            className="item1a"
            src={
              "http://icons.iconarchive.com/icons/shin-ui/christmas/128/gift-icon.png"
            }
            alt="xmas present"
          />

          <div className="item4"> Bonkers Holiday Videos</div>
        </header>

        <RentalManager changeMessageCallback={this.changeMessage} />
      </div>
    );
  }
}

export default App;
