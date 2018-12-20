import React, { Component } from "react";
import axios from "axios";
import Customer from "./Customer";
import PropTypes from "prop-types";
import "./Customers.css";
import Sound from "react-sound";
import xmassong from "../../src/xmassong.mp3";

class Customers extends Component {
  constructor(props) {
    super(props);
    // this.onPlay = this.onPlay;
    // this.sound = new Audio(xmassong);

    this.state = {
      customers: [],
      message: ""
    };
  }

  componentDidMount() {
    const url = "http://localhost:3000/customers";
    axios
      .get(url)
      .then(response => {
        const customers = response.data.map(customer => {
          return { ...customer };
        });

        this.setState({ customers });
      })
      .catch(error => {
        const errorMessage = error.message;
        this.setState({ errorMessage });
      });
  }

  populateCustomers = () => {
    return this.state.customers.map((customer, i) => {
      const newCustomer = { ...customer };
      return (
        <Customer
          key={i}
          customer={newCustomer}
          setCustomerCallback={this.props.setCustomerCallback}
        />
      );
    });
  };

  changeMessage = message => {
    this.setState({ message });
    setTimeout(() => this.setState({ message: "" }), 2500);
  };

  render() {
    return (
      // <div>
      //   Listen to some Christmas tunes:
      //   <audio controls>
      //     <source
      //       src="../../src/xmassong.mp3"
      //       type="audio/mp3"
      //       preload={true}
      //     />
      //   </audio>   </div>

      <section>
        <h1 className="customers"> {this.state.message} </h1>
        {this.populateCustomers()}
      </section>
    );
  }
}

Customers.propTypes = {
  customers: PropTypes.array,
  setCustomerCallback: PropTypes.func
};

export default Customers;
