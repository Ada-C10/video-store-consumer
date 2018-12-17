import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './components/Index';
import Search from './components/Search';
import Library from './components/Library';
import Customers from './components/Customers';

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search/">Search</Link>
          </li>
          <li>
            <Link to="/library/">Library</Link>
          </li>
          <li>
            <Link to="/customers/">Customers</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/search/" component={Search} />
      <Route path="/library/" component={Library} />
      <Route path="/customers/" component={Customers} />

    </div>
  </Router>
);

export default AppRouter;
