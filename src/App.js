import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RentalManager from './components/RentalManager';
import MessageBar from './components/MessageBar';



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
        <p className="App-intro">Customers</p>
        <MessageBar message={this.state.message}/>
        <RentalManager changeMessageCallback={this.changeMessage}/>
      </div>
    );
  }
}

export default App;
