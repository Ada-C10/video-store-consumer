import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import { Route } from 'react-router-dom';
import MovieSearchForm from './components/MovieSearchForm';
import Library from './components/Library';
import Customers from './components/Customers';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: 'None',
      selectedCustomer: 'None'
    };
  }

  selectMovieForRental = (movieTitle) => {
    this.setState({
      selectedMovie: movieTitle
    })
  }

  selectCustomerForRental = (customerObject) => {
    this.setState({
      selectedCustomer: customerObject
    })
  }


  render() {
    let location = this.props.location.pathname

    return (
      <div>
        <NavMenu selectedMovie={this.state.selectedMovie} selectedCustomer={this.state.selectedCustomer}/>
        <Route path="/search" component={MovieSearchForm} />
        <Route exact path="/library" render={(props) => (
          <Library selectedMovieCB={this.selectMovieForRental} />
        )}/>
      <Route exact path="/customers" render={(props) => (
        <Customers selectedCustomerCB={this.selectCustomerForRental} />
      )}/>

    {location==='/' ? <div className="splash-container">
    <img src="http://i65.tinypic.com/15yxd92.jpg" alt="woman with popcorn" />
    <h1 className="intro-heading">Hello and welcome to Vambuster Video's internal app!</h1>
    <h1 className="intro-more">You are a very valued employee.</h1>
    </div> : ''}
      </div>
    );
  }
}

App.propTypes = {
  selectedMovie: PropTypes.object,
  selectedCustomer: PropTypes.string,
  selectedMovieCB: PropTypes.func,
  selectedCustomerCB: PropTypes.func,
};

export default App;
