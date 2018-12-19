import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from './MovieList';
import CustomerList from './CustomerList';
import Search from './Search';
import axios from 'axios';




class VideoStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCustomer: "none",
      selectedMovie: "none",
      errorMessage: "",
      returnedMovie: null
    };
  }

  findMovie =(movie) => {
    const movieSelectedState = {}
    movieSelectedState["selectedMovie"] = movie
    this.setState(movieSelectedState)
  }

  resetState = () => {
    this.setState({
      selectedCustomer: 'none',
      selectedMovie: 'none',
      errorMessage: ''
    });
  }

  findCustomer =(customer) => {
    const customerSelectedState = {}
    customerSelectedState["selectedCustomer"] = customer
    this.setState(customerSelectedState)
  }

  checkOutRental  =() => {
    let today = new Date();
    today.setDate(today.getDate() + 7)
    const apiPayload = {
      title: this.state.selectedMovie.title,
      customer_id: this.state.selectedCustomer.id,
      due_date: today
    }
    if (this.state.selectedCustomer !== "none" && this.state.selectedMovie !== "none") {
      axios.post(`http://localhost:3000/rentals/${this.state.selectedMovie.title}/check-out`, apiPayload)
      .then((response) => {
        console.log(response);
        this.resetState();
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      });
    } else if (this.state.selectedCustomer === "none" && this.state.selectedCustomer !== "none") {
      this.setState({
        errorMessage: "No movie selected, please select one"
      })

    } else if (this.state.selectedMovie === "none" && this.state.selectedCustomer !== "none") {
      this.setState({
        errorMessage: "No movie selected, please select one"
      })
    } else {
      this.setState({
        errorMessage: "No movie or customer selected"
      })
    }
  }

  checkInRental  =() => {
    const apiPayload = {
      title: this.state.selectedMovie.title,
      customer_id: this.state.selectedCustomer.id,
    }
    if (this.state.selectedCustomer !== "none" && this.state.selectedMovie !== "none") {
      axios.post(`http://localhost:3000/rentals/${this.state.selectedMovie.title}/return`, apiPayload)
      .then((response) => {
        console.log(response);
        this.setState({
          returnedMovie: this.state.selectedMovie
        })
        this.resetState();
      })
      .catch((error) => {
        let message = ""
        if (error.message === "Request failed with status code 404") {
          message = "This movie has not been checked by the customer selected"
        }
        this.setState({
          errorMessage: message
        })
      });
    } else if (this.state.selectedCustomer === "none" && this.state.selectedCustomer !== "none") {
      this.setState({
        errorMessage: "No movie selected, please select one"
      })

    } else if (this.state.selectedMovie === "none" && this.state.selectedCustomer !== "none") {
      this.setState({
        errorMessage: "No movie selected, please select one"
      })
    } else {
      this.setState({
        errorMessage: "No movie or customer selected"
      })
    }
  }

  //      <Route path="/movies" render={(props) => <MovieListShow {...this.findMovie}/>}/>
  //      <Route path="/movies" component={() => <MovieListShow findMovief={this.findMovie}  />}/>


  render() {
    return (
      <Router>
      <div>
      <script src="path/to/flash.min.js"></script>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/movies">Movies</Link>
      </li>
      <li>
      <Link to="/customers">Customers</Link>
      </li>
      <li>
      <Link to="/search">Search</Link>
      </li>
      <li>
      <Link to="/overdue">Overdue</Link>
      </li>
      </ul>
      <h4>{this.state.errorMessage ? this.state.errorMessage: "" }</h4>

      <div>{this.state.selectedCustomer === "none" ? this.state.selectedCustomer
       : this.state.selectedCustomer.name}</div>
      <div>{this.state.selectedMovie === "none" ? this.state.selectedMovie : this.state.selectedMovie.title}</div>
      <button
      onClick ={this.checkOutRental}
      type="button">Check Out New Rental</button>
      <button
      onClick ={this.checkInRental}
      type="button">Check In Movie</button>
      <hr />

      <Route exact path="/" component={Home} />

      <Route path="/movies" render={(props) => <MovieListShow {...props} findMovieProp={this.findMovie} />}/>
      <Route path="/customers" render={(props) => <CustomerListShow {...props} findCustomerProp={this.findCustomer} />}/>
      <Route path="/search" component={SearchShow} />

      <Route path="/overdue" render={(props) => <OverdueShow {...props} returnedMovieProp={this.state.returnedMovie} findMovieProp={this.findMovie} findCustomerProp={this.findCustomer} />}/>

      </div>
      </Router>)
    }
  }

  function Home() {
    return (
      <div>
      <h2>Home</h2>
      </div>
    );
  }


  function OverdueShow(props) {
    return (
      <div>
      <h2>Overdue Movies</h2>
      <MovieList
      selectCustomerCallback={props.findCustomerProp} selectMovieCallback={props.findMovieProp}

      URL={"http://localhost:3000/rentals/overdue"}
      movie={props.returnedMovieProp ? props.returnedMovieProp : "none"}/>
      </div>
    );
  }

  function SearchShow() {
    return (
      <div>
      <Search/>
      </div>
    );
  }

  function MovieListShow(props) {

    return (
      <section>
      <MovieList selectMovieCallback={props.findMovieProp} URL = {"http://localhost:3000/movies"}/>
      </section>
    );
  }

  function CustomerListShow(props) {
    return (
      <div>
      <CustomerList selectCustomerCallback={props.findCustomerProp}/>
      </div>
    );
  }

  export default VideoStore;
