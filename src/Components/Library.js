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
      customerInfo: {}
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
    const days = 7; // Days you want to subtract
    const date = new Date();
    let last = new Date(date.getTime() + (days * 24 * 60 * 60 * 1000));



    axios.post(`http://localhost:3001/rentals/${this.state.selectedMovie}/${this.state.customerInfo.id}/check-out?due_date=${last}`)
    .then((response) => {
      console.log(response);
    })
    .catch((errors) => {
      console.log(errors);
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

          <section className="showPageToUser">
            <Route exact={true} path="/Search" component={Search}/>
            <Route path="/VideoCollection"
            render={() => <VideoCollection  addToRentClickHander= {this.addToRent}/> } />
            <Route path="/CustomerCollection" render={() => <CustomerCollection addToSelectCustomerHandler={this.selectNewCustomer}/>}/>
          </section>
        </section>
      </Router>
    );
  }
}

export default Library;
