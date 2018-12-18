import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Customers from './Components/Customers';
import Library from './Components/Library';
import Search from './Components/Search';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomer: undefined,
      selectedMovie: undefined
    }
  }

  url = ""

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
           <Route path="/customers" component={Customers} baseUrl={this.url} />
         </div>
       </Router>

      </div>
    );
  }
}

export default App;
