import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Library from './components/Library';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [
        {
          "title": "Psycho",
          "overview": "When larcenous real estate clerk Marion Crane goes on the lam with a.",
          "release_date": "1960-06-16",
          "inventory": 8
        },
        {
          "title": "Jaws",
          "overview": "An insatiable great white shark terrorizes the townspeople of A.",
          "release_date": "1975-06-19",
          "inventory": 6
        }
      ],

    };
  }

  onSearchChange = (value) => {
  console.log(value);
  const movie = this.state.Library.filter((movie) => {
    return regex.test(`${pet.name}${pet.about}${pet.species}`.toUpperCase());
  });

  this.setState({
    movieList,

  });
}

  componentDidMount() {

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
