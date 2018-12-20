import React from 'react';
import axios from 'axios';
import Customer from './Customer';


class CustomerCollection extends React.Component {

  constructor() {
    super();

    this.state = {
      customers: [],
      message: "",
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/customers')
    .then((response) => {
      this.setState({
        customers: response.data,
        message: `Successfully loaded ${response.data.length} customers`
      });
      this.props.getMessage(this.state.message);
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    })
  }



  // showMessage = () => {
  //   if (this.state.message.length >= 1) {
  //     return <p>{this.state.message}</p>
  //   }
  // }


  render() {
    const collection = this.state.customers

    const customerCollection = collection.map((customer, i) => {
      return <Customer
      key={i}
      name={customer.name}
      count={customer.movies_checked_out_count}
      addToSelectCustomerHandler={() => this.props.addToSelectCustomerHandler(customer)}
      />
    });

    return (
      <section>
          {customerCollection}
      </section>
    );
  }

}

export default CustomerCollection;
