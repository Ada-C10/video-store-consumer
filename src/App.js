import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RentalManager from './components/RentalManager';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {message: ""};
  }

  changeMessage = (message) => {
    this.setState({message});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.message}</p>

        <RentalManager changeMessageCallback={this.changeMessage}/>
      </div>
    );
  }
}

export default App;
