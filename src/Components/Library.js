import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import VideoCollection from './VideoCollection'
import Search from './Search'
import CustomerCollection from './CustomerCollection';

class Library extends React.Component {

  constructor() {
    super();

    this.state = ({
      selectedMovie: "None",
      selectedCustomer: "None",
      customerInfo: {},
      message: "",
      errors: [],
    })

  }

  addToRent = (video) => {
    let updatedMovie = video.title;

    this.setState({
      selectedMovie: updatedMovie
    })

  }

  selectNewCustomer = (customer) => {
    let updatedCustomer = customer;

    this.setState({
      selectedCustomer: updatedCustomer.name,
      customerInfo: updatedCustomer,
    })
  }

  createNewRental = (customer, video) => {
    this.setState({
      errors: [],
    })

    console.log("im in create new rental");
    const days = 7;
    const date = new Date();
    let last = new Date(date.getTime() + (days * 24 * 60 * 60 * 1000));

    axios.post(`http://localhost:3001/rentals/${this.state.selectedMovie}/${this.state.customerInfo.id}/check-out?due_date=${last}`)
    .then((response) => {
      this.setState({
        message: `Successfully checked out ${this.state.selectedMovie} to ${this.state.customerInfo.name}`,
      });
      this.showMessageVideo(this.state.message);
    })
    .catch((errors) => {
      console.log(errors.response.data.errors);
      // const currentErrors = this.state.errors;
      // currentErrors.push(errors.response.data.errors)
      //
      //
      // this.setState({
      //   errors: currentErrors,
      // })

        this.setState({
          message: `Unable to rent: no such  ${Object.keys(errors.response.data.errors)} as "None"`,
        })
        this.showMessageVideo(this.state.message);

    })
  }

  // showErrors = () => {
  //   this.state.
  // }

  showMessageVideo = (message) => {
    this.setState({
      message: message
    })
    console.log("I'm in show message VIDEO");
  }

  showMessageCust = (message) => {
    this.setState({
      message: message
    })
    console.log("I'm in show message CUST");
  }

  showMessageSearch = (message) => {
    console.log("I'm in show msg SEARCH");
    this.setState({
      message: message,
    })
  }

  render() {
    return (
      <Router>
        <section className="App">
          <header className="header">
            <nav>
              <ul>
                <li>
                  <button>
                    <Link to="/VideoCollection">Library</Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to="/CustomerCollection">Customers</Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to="/Search">Search</Link>
                  </button>
                </li>
                <li>
                  <label>Selected Movie</label>
                  <p>{this.state.selectedMovie}</p>
                </li>
                <li>
                  <label>Selected Customer</label>
                  <p>{this.state.selectedCustomer}</p>
                </li>
                <li>
                  <button
                    onClick={this.createNewRental}>
                    Check Out New Rental
                  </button>
                </li>
              </ul>
            </nav>
          </header>
          <div>
            {this.state.message}
          </div>
          <section className="showPageToUser">
            <Route exact={true} path="/Search" render={() => <Search getMessage={this.showMessageSearch}/>} />


            <Route path="/VideoCollection"
            render={() => <VideoCollection  addToRentClickHander= {this.addToRent} getMessage={this.showMessageVideo}/> } />
            <Route path="/CustomerCollection" render={() => <CustomerCollection addToSelectCustomerHandler={this.selectNewCustomer}
            getMessage={this.showMessageCust}/>}/>
          </section>
        </section>
      </Router>
    );
  }
}

export default Library;
