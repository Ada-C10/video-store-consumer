import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import VideoCollection from './VideoCollection'
import Search from './Search'
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
          <nav>
            <button>
              <Link to="/VideoCollection">Library</Link>
            </button>
            <button>
              <Link to="/CustomerCollection">Customers</Link>
            </button>
            <button>
              <Link to="/Search">Search</Link>
            </button>
          </nav>
          <Route exact={true} path="/Search" component={Search}/>
          <Route exact={true} path="/VideoCollection" component={VideoCollection}/>
          <Route exact={true} path="/CustomerCollection" component={CustomerCollection }/>
        </section>
      </Router>
    );
  }
}

export default Library;
