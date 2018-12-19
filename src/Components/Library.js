import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import VideoCollection from './VideoCollection'
import Search from './Search'
import CustomerCollection from './CustomerCollection';

class Library extends React.Component {

  constructor() {
    super();

    this.state = ({
      selectedMovie: "None",
      selectedCustomer: "None",
    })

  }

  addToRent = (video) => {
    let updatedMovie = video.title;

    this.setState({
      selectedMovie: updatedMovie
    })

  }

  render() {
    return (
      <Router>
        <section className="App">
          <header className="header">
            <nav>
              <ul>
                <li>
                  <button>
                    <Link to="/VideoCollection">Library</Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to="/CustomerCollection">Customers</Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to="/Search">Search</Link>
                  </button>
                </li>
                <li>
                  <label>Selected Movie</label>
                  <p>{this.state.selectedMovie}</p>
                </li>
                <li>
                  <label>Selected Customer</label>
                  <p>{this.state.selectedCustomer}</p>
                </li>
                <li>
                  <button>
                    <Link to="/">Check Out New Rental</Link>
                  </button>
                </li>
              </ul>
            </nav>
          </header>

          <section className="showPageToUser">
            <Route exact={true} path="/Search" component={Search}/>
            <Route path="/VideoCollection"
            render={() => <VideoCollection  addToRentClickHander= {this.addToRent}/> } />
            <Route exact={true} path="/CustomerCollection" component={CustomerCollection }/>
          </section>
        </section>
      </Router>
    );
  }
}

export default Library;
