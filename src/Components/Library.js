import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import VideoCollection from './VideoCollection'
import Search from './Search'
import CustomerCollection from './CustomerCollection';
import './Library.css';

class Library extends React.Component {

  constructor() {
    super();

    this.state = ({
      selectedMovie: "None",
      selectedCustomer: "None",
      customerInfo: {},
      message: "",
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

      this.setState({
        message: `Unable to rent: no such  ${Object.keys(errors.response.data.errors)} as "None"`,
      })
      this.showMessageVideo(this.state.message);

    })
  }

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

  showMessageWhenAvailable = () => {
    if (this.state.message.length > 0) {
      return <div className="msgToUser">
        {this.state.message}
      </div>
    }
  }

  render() {
    return (
      <Router>
        <section className="App">
          <header className="header">
            <nav>
              <ul>
                <li>
                  <Link to="/VideoCollection">
                    <ul className="iconButtons">
                      <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5bvAuGdLZFQtPIMFfaadrp57KtLrRoWvbdro_GwMyALcM4y4UA" alt="film roll" className="Img"/>
                      </li>
                      <li>
                        <label className="labelForLibrary">Library</label>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li>
                  <Link to="/CustomerCollection">
                    <ul className="iconButtons">
                      <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSclOKgNflUP6HlIJA0bZelbTjiQiZ4a-wgJWAkeU8wdzp314FE" alt="people to represent customers" className="ImgForCustomer"/>
                      </li>
                      <li>
                        <label className="labelForCustomer">Customers</label>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li>
                  <Link to="/Search">
                    <ul className="iconButtons">
                      <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvV7jmSzWk6CXp_l3bFBdY239ONNa6B6kWKFpzp9prf9uaDeOeg" alt="magnifying glass to represent search" className="Img" lable="Search"/>
                      </li>
                      <li>
                        <label className="labelForSearch">Search</label>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li>
                  <div className="selectedMovie">
                    <label>Selected Movie</label>
                    <p className="selectedName">{this.state.selectedMovie}</p>
                  </div>
                </li>
                <li>
                  <div className="selectedMovie">
                    <label>Selected Customer</label>
                    <p className="selectedName">{this.state.selectedCustomer}</p>
                  </div>
                </li>
                <li>
                  <button
                    onClick={this.createNewRental} className="rentalButton">
                    Check Out New Rental
                  </button>
                </li>
              </ul>
            </nav>
          </header>
            {this.showMessageWhenAvailable()}
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
