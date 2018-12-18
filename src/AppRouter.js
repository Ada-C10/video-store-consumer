import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import HomePage from "./components/HomePage"
import SearchPage from "./components/SearchPage"
import LibraryPage from "./components/LibraryPage"
import CustomersPage from "./components/CustomersPage"

import SearchBar from "./components/SearchBar"
import CheckOutForm from './components/CheckOutForm'


class AppRouter extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      selectedMovie: {},
      selectedCustomer: {},
      alert: {}
    }
  }

  searchTerm = async (query) => {
    console.log('callback');
    console.log(query);
    const callbackPath = '/search'
    this.setState({ query })
    return callbackPath
  }

  selectMovie = (selectedMovie) => {
    this.setState({ selectedMovie })
  }

  selectCustomer = (selectedCustomer) => {
    this.setState({ selectedCustomer })
  }

  renderAlert = (message) => {
    this.setState({alert: message})
  }

  resetCheckOutForm = () => {
    this.setState({
      selectedMovie: {},
      selectedCustomer: {}
    })
    console.log('reset checkout form')
    console.log(this.state.selectedMovie)
  }

  render() {
    const page = (
        <section>
          <Route path="/" exact component={ HomePage } />
          <Route path="/search/" component={ props =>
              <SearchPage { ...props }
                query= { this.state.query }
                renderAlertCallback= { this.renderAlert }
              />
          } />
          <Route path="/library/" component={ props =>
            <LibraryPage { ...props }
              selectMovieCallback={ this.selectMovie }
            />
          } />
          <Route path="/customers/" component={ props =>
            <CustomersPage { ...props }
              selectCustomerCallback={ this.selectCustomer }
            />
          } />
        </section>
    )

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/search/">Search Movies</NavLink>
              </li>
              <li>
                <NavLink to="/library/">Movie Library</NavLink>
              </li>
              <li>
                <NavLink to="/customers/">Customers</NavLink>
              </li>
              <li>
                <SearchBar searchTermCallback={ this.searchTerm } />
              </li>
              <li>
                <CheckOutForm
                  selectedMovie={ this.state.selectedMovie }
                  selectedCustomer={ this.state.selectedCustomer }
                  resetCheckOutFormCallback={ this.resetCheckOutForm }
                />
              </li>
            </ul>
          </nav>
          <section className={ Object.keys(this.state.alert)[0]}>
            { Object.values(this.state.alert)[0] }
          </section >

          { page }

        </div>
      </Router>
    )
  }
}

export default AppRouter;
