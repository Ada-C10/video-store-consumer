import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from '../App';
import Customers from './Customers';
import Library from './Library';
import Search from './Search';
import NotFound from './NotFound';

class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieId: null,
      customerId: null,
      currentMovieTitle: "",
      currentCustomerName: ""
    };
  }

  getMovie = (id, title) => {

    this.setState({
      currentMovieTitle: title,
      movieId: id
    })
  }

  getCustomer = (id,customer) => {
    this.setState({
      currentCustomerName: customer,
      customerId: id
    })
  }

  render() {
    return <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <p>Selected Movie:</p>
                {this.state.currentMovieTitle && <p>
                    {this.state.currentMovieTitle}
                  </p>}
              </li>
              <li>
                <p>Selected Customer:</p>
                {this.state.currentCustomerName && <p>
                    {this.state.currentCustomerName}
                  </p>}
              </li>
              <li>
                <button>Check Out</button>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/search" component={Search} />
            <Route path="/library" render={() => <Library getMovie={this.getMovie} />} />
            <Route path="/customers" render={() => <Customers getCustomer={this.getCustomer} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>;
  }
}

export default Router;
