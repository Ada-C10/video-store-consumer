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
}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      movies: [],
      rentals: []
    }
  }
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

           <hr />

           <Route path="/search" component={Search} />
           <Route path="/library" component={Library} />
           <Route path="/customers" component={Customers} />
         </div>
       </Router>

      </div>
    );
  }
}

export default App;
