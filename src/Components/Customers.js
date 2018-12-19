import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';
// import './Customers.css';

class Customers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: ["sample customer"],
      error: undefined
    }
  }

  componentDidMount(){
    const customersURL = this.props.baseUrl + "customers/"
    axios.get(customersURL)
    .then((response) => {
      this.setState({
        customers: response.data,
      })
    })
    .catch((error) => {
      const errorStr = `Got an error with status ${error.response.status} and message ${error.response.statusText}`
      this.setState({
        error: errorStr
      })
    })
  }

  render() {
    const customers = this.state.customers.map( (cust) => {
      return (<Customer key={`${cust.name}${cust.id}`} name={cust.name}
        id={cust.id} moviesCheckedOutCount={cust.movies_checked_out_count}
         selectCustomerCallback={() => this.props.selectCustomerCallback(cust)}/>) });
    return (
      <div >
        <h1>
          {customers}
        </h1>
      </div>
    );
  }
}

export default Customers;

Customers.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  selectCustomerCallback: PropTypes.func.isRequired
};
