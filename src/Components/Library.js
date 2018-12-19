import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import VideoCollection from './VideoCollection'
import Search from './Search'
import CustomerCollection from './CustomerCollection';
// import Search from '/Search';

class Library extends React.Component {


  constructor() {
    super();

    this.state = ({
      selectedMovie: "None",
      selectedCustomer: "None",
    })

  }




  render() {
    return (
      <Router>
        <section className="App">
          <header className="header">
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

            <div>
              <label>Selected Movie</label>
              <p>{this.state.selectedMovie}</p>
            </div>

            <div>
              <label>Selected Customer</label>
              <p>{this.state.selectedCustomer}</p>
            </div>
          </header>

          <section className="showPageToUser">
            <Route exact={true} path="/Search" component={Search}/>
            <Route exact={true} path="/VideoCollection" component={VideoCollection}/>
            <Route exact={true} path="/CustomerCollection" component={CustomerCollection }/>
          </section>
        </section>
      </Router>
    );
  }
}

export default Library;
