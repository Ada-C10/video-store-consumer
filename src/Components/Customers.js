import React from 'react';
// import './RecentSubmission.css';

const customerList = [
  {
    "name": "Shelley Rocha",
    "registered_at": "Wed, 29 Apr 2015 07:54:14 -0700",
    "address": "Ap #292-5216 Ipsum Rd.",
    "city": "Hillsboro",
    "state": "OR",
    "postal_code": "24309",
    "phone": "(322) 510-8695",
    "account_credit": 13.15
  },
  {
    "name": "Curran Stout",
    "registered_at": "Wed, 16 Apr 2014 21:40:20 -0700",
    "address": "Ap #658-1540 Erat Rd.",
    "city": "San Francisco",
    "state": "California",
    "postal_code": "94267",
    "phone": "(908) 949-6758",
    "account_credit": 35.66
  }]

  class Customers extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        customers: []
      }
    }
    componentDidMount(){

    }
    render() {
      return (
        <div >
          <h1>
            You are in Customers
          </h1>
        </div>
      );
    }
  }

  export default Customers;
