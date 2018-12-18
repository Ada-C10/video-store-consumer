import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './Index';
import Search from './Search';
import Library from './Library';
import Customers from './Customers';

const AppRouter = (props) => (
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

      <Route path="/customers/" component={() => {return <Customers setCustomerCallback={props.setCustomer}/>}} />

    </div>
  </Router>
);

export default AppRouter;
