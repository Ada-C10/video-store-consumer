import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import Customer from './Customer';

import './Library.css';

class Library extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      customers: [],
    };
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = () => {
    axios.get('http://localhost:3000/')
    .then((response) => {
      this.setState({ movies: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  getCustomers = () => {
    axios.get('http://localhost:3000/')
    .then((response) => {
      this.setState({ customers: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  // addCard = (text, emoji) => {
  //   axios.post(`https://inspiration-board.herokuapp.com/boards/Naheed/movies?text=${text}&emoji=${emoji}`)
  //   .then((response) => {
  //     this.getCards()
  //   });
  // }
  //
  // deleteCard = (id) => {
  //   axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`, id)
  //   .then((response) => {
  //     this.getCards()
  //   });
  // }

  render() {
    const allMovies = this.state.movies.map((movie) => {
      return <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}
        external_id={movie.external_id}/>
    });

    const allCustomers = this.state.customers.map((customer) => {
      return <Customer
        key={customer.id}
        id={customer.id}
        name={customer.name}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postal_code={customer.postal_code}
        phone={customer.phone}
        account_credit={customer.account_credit}
        created_at={customer.created_at}/>
    });

    return (
      <div >
        <div className="library">
          {allMovies}
        </div>
        <div className="customers">
          {allCustomers}
        </div>
      </div>
    )
  }
}

Library.propTypes = {

};

export default Library;
