import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import VideoCollection from './VideoCollection'

import CustomerCollection from './CustomerCollection';
// import Search from '/Search';

class Library extends React.Component {


  constructor() {
    super();

  }


  render() {
    return (
      <Router>
        <section>
          <Route exact={true} path="/VideoCollection" component={VideoCollection}/>
          <Link to="/VideoCollection">Library</Link>
          <Route exact={true} path="/CustomerCollection" component={CustomerCollection }/>
          <Link to="/CustomerCollection">Customers</Link>
        </section>
      </Router>
    );
  }
}

export default Library;
