import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from './MovieList';
import CustomerList from './CustomerList';
import Search from './Search';



class VideoStore extends Component {

  render() {
    return (
      <Router>
      <div>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/movies">Movies</Link>
      </li>
      <li>
      <Link to="/customers">Customers</Link>
      </li>
      <li>
      <Link to="/search">Search</Link>
      </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/movies" component={MovieListShow} />
      <Route path="/customers" component={CustomerListShow} />
      <Route path="/search" component={SearchShow} />
      </div>
      </Router>)
    }
  }

  function Home() {
    return (
      <div>
      <h2>Home</h2>
      </div>
    );
  }

  function SearchShow() {
    return (
      <div>
      <Search/>
      </div>
    );
  }

  function MovieListShow() {

    return (
      <section>
      <MovieList/>
      </section>
    );
  }

  function CustomerListShow() {
    return (
      <div>
      <CustomerList/>
      </div>
    );
  }

  export default VideoStore;
