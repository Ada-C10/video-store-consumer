import React, { Component } from 'react';
import axios from 'axios';
import Customer from './Customer';

<<<<<<< HEAD
class Customers extends Component  {

  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    }
  }

  componentDidMount() {

    const url = "http://localhost:3000/customers";
    axios.get(url)
      .then((response) => {
        const customers = response.data.map((customer) => {
          return {...customer};
        })

        this.setState({customers});
        console.log(this.state.customers);

      })
      .catch((error) => {
        const errorMessage = error.message;
        this.setState({errorMessage});
      });

  }

  populateCustomers = () => {
    return this.state.customers.map((customer, i) => {
      return <Customer key={i} name={customer.name} movies_checked_out_count={customer.movies_checked_out_count} />
    })
  }

  render() {
    return (

      <section>
        <h1> CUSTOMERS PAGE </h1>
        {this.populateCustomers()}
      </section>
    )
  }
=======
class Customer extends Component {
  componentDidMount() {
    axios
      .get(localhost)
      .then(response => {
        const cards = response.data.map(card => {
          const newCard = {
            ...card.card
          };

          return newCard;
        });

        this.setState({
          cards: cards,
          errorMessage: null
        });
      })
      .catch(error => {
        console.log(error.message);
        this.setState({ errorMessage: error.message });
      });
  }
  return  <h2> Customers!!!! </h2>
>>>>>>> addComponents
}

  Customers.propTypes = {

  };

  export default Customers;
