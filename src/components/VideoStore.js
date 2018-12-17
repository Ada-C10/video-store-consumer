import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from './MovieList';


function VideoStore() {
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
    </ul>

    <hr />

    <Route exact path="/" component={Home} />
    <Route path="/movies" component={MovieListShow} />
    <Route path="/customers" component={CustomerList} />
    </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
    <h2>Home</h2>
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

function CustomerList() {
  return (
    <div>
    <h2>About</h2>
    </div>
  );
}

export default VideoStore;
