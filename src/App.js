import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Customers from './Components/Customers';
import Library from './Components/Library';
import Search from './Components/Search';

const customerList = [
  {
    "name": "Shelley Rocha",
    "registered_at": "Wed, 29 Apr 2015 07:54:14 -0700",
    "address": "Ap #292-5216 Ipsum Rd.",
    "city": "Hillsboro",
    "state": "OR",
    "postal_code": "24309",
    "phone": "(322) 510-8695",
    "account_credit": 13.15
  },
  {
    "name": "Curran Stout",
    "registered_at": "Wed, 16 Apr 2014 21:40:20 -0700",
    "address": "Ap #658-1540 Erat Rd.",
    "city": "San Francisco",
    "state": "California",
    "postal_code": "94267",
    "phone": "(908) 949-6758",
    "account_credit": 35.66
  }];

const rentalList = [
  {
    id: 1,
    title: "Psycho",
    overview: "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
    release_date: "1960-06-16",
    image_url: "https://image.tmdb.org/t/p/w185/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg",
    external_id: 539
  },
  {
    id: 2,
    title: "Jaws",
    overview: "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.",
    release_date: "1975-06-18",
    image_url: "https://image.tmdb.org/t/p/w185/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg",
    external_id: 578
  },
  {
    id: 3,
    title: "The Exorcist",
    overview: "12-year-old Regan MacNeil begins to adapt an explicit new personality as strange events befall the local area of Georgetown. Her mother becomes torn between science and superstition in a desperate bid to save her daughter, and ultimately turns to her last hope: Father Damien Karras, a troubled priest who is struggling with his own faith.",
    release_date: "1973-12-26",
    image_url: "https://image.tmdb.org/t/p/w185/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg",
    external_id: 9552
  }
];

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     customers: [],
     movies: [],
     rentals: [],
     selectedCustomer: undefined,
     selectedMovie: undefined
   }
 }

 selectMovie = (movie) => {
   console.log(movie);
   this.setState({
     selectedMovie: movie
   });
 };

  render() {
    return (
      <div className="App">
        <Router>
         <div>
           <ul>
             <li>
               <Link to="/search">Search</Link>
             </li>
             <li>
               <Link to="/library">Library</Link>
             </li>
             <li>
               <Link to="/customers">Customers</Link>
             </li>
           </ul>

           <div>
             <p>Selected Movie</p>
             {this.state.selectedMovie && <p>{this.state.selectedMovie.title}</p>}
           </div>


           <Route path="/search" component={Search} />
           <Route
             path="/library"
             render={() => <Library selectMovieCallback={this.selectMovie}/>}
           />
           <Route path="/customers" component={Customers} />
         </div>
       </Router>

      </div>
    );
  }
}

export default App;
