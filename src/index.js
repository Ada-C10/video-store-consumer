import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Customers from './Components/Customers';
import Library from './Components/Library';
import Search from './Components/Search';

ReactDOM.render(
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
  </Router>,
  document.getElementById('root')
  // document.getElementById('app')
)

registerServiceWorker();
