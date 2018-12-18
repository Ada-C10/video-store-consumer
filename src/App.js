import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Library from './components/Library';
import axios from 'axios';

import './App.css';

const URL="http://localhost:3000/";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    axios.get(URL)
      .then((response) => {
        const movies = response.data.map((movie) => {
          const newMovie = {
            ...movie,
          }
          return newMovie;
        })
        this.setState({movieList: movies})
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      })

  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/library/">Library</Link></li>
              </ul>
            </nav>

            <Route path="/library/" render={() => <Library movies={this.state.movieList} /> } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
