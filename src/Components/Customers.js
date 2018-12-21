import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';
// import './Customers.css';
import SearchBar from './SearchBar';

class Customers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      masterCustomerList: []
    }
  }

  searchCustomer = (customerSearch) => {

    const regexSearch = new RegExp(customerSearch.toLowerCase());

    const matchingCustomerArray = this.state.masterCustomerList.filter((cust) => {
      return regexSearch.test(cust.name.toLowerCase()) ||
      regexSearch.test(cust.id)
    })
    this.setState({
      customers: matchingCustomerArray,
      message: `Found ${matchingCustomerArray.length} customers.`
    })
    this.props.setStatusMessageCallback(this.state.message);
  }

  componentDidMount(){
    const customersURL = this.props.baseUrl + "customers?n=1000&p=1";

    this.props.setStatusMessageCallback("Loading Customers...");
    axios.get(customersURL)
    .then((response) => {
      this.setState({
        customers: response.data,
        masterCustomerList: response.data,
        message: `Loaded ${response.data.length} customers`
      })
      this.props.setStatusMessageCallback(this.state.message);
    })
    .catch((error) => {
      const errorStr = `Got an error with status ${error.response.status} and message ${error.response.statusText}`
      this.setState({
        error: errorStr
      })
      this.props.setStatusMessageCallback(`Unable to load customers. ${this.state.error}`);
    })
  }

  render() {

    const customers = this.state.customers.map( (cust) => {
      return (<Customer key={`${cust.name}${cust.id}`} name={cust.name}
        id={cust.id} moviesCheckedOutCount={cust.movies_checked_out_count}
        selectCustomerCallback={() => this.props.selectCustomerCallback(cust)}/>) });
        return (
          <div >
            <SearchBar searchCustomerCallback={this.searchCustomer} customerSearch={true}/>
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
      selectCustomerCallback: PropTypes.func.isRequired,
      setStatusMessageCallback: PropTypes.func.isRequired
    };
