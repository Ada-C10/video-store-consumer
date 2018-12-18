import PropTypes from 'prop-types';
import Customer from './Customer';
import React from 'react';
import {Component} from 'react';
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

class CustomerList extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         currentCustomer: '',
    //         customers: [],
    //         errorMessages: '',
    //     };
    // }
    // componentDidMount() {
    //     axios.get("http://localhost:3000/customers")
    //         .then((response) => {
    //             console.log('response', response.data);
    //             const customers = response.data.map((customer) => {
    //                 const newCustomer = {
    //                     ...customer,
    //                     rentalCredit: customer["account_credit"],
    //                     moviesCheckedOut: customer["movies_checked_out_count"],
    //
    //                 };
    //                 return newCustomer
    //             });
    //
    //             this.setState({
    //                 customers,
    //             })
    //         })
    //     .catch((error) => {
    //         console.log('errors:', error.message);
    //         this.setState ({
    //             errorMessage: error.message
    //         });
    //     });
    // }
    //
    // onSelectCustomer = (customerId) => {
    //     console.log('cust id in customerlist compo', customerId);
    //     const selectedCust = this.state.customers.find((customer) =>{
    //         return customer.id === customerId;
    //     });
    //     console.log('selected cust', selectedCust);
    //     if (selectedCust) {
    //         this.setState({
    //             currentCustomer: selectedCust,
    //         });
    //     }
    // };

    render() {
        // console.log('customer list', this.state.customers);
        console.log('all customers', this.props.customers);

        const customerList = this.props.customers.map((customer) => {
            return <Customer key={customer.id}
                             onSelectCallback={this.props.onSelectCallback}
                             {...customer} />

        });
        return (
            <section className="customer-card-group">
                {customerList}
            </section>
        )
    };
}


CustomerList.propTypes = {
    customers: PropTypes.array,
    onSelectCallback: PropTypes.func

};

export default CustomerList;