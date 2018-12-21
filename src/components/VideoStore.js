import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from './MovieList';
import CustomerList from './CustomerList';
import Search from './Search';
import axios from 'axios';
import './VideoStore.css';




class VideoStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCustomer: "none",
      selectedMovie: "none",
      errorMessage: "",
      returnedMovie: null,
      statusSearch: ""
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
        errorMessage: "Please select a movie and a customer before checking in a movie"
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
        errorMessage: "Please select a movie and a customer before checking in a movie"
      })
    }
  }

  //      <Route path="/movies" render={(props) => <MovieListShow {...this.findMovie}/>}/>
  //      <Route path="/movies" component={() => <MovieListShow findMovief={this.findMovie}  />}/>


  render() {
    return (
      <Router>
      <div>
      <header>
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"}>
      <div className={"container"}>
      <a className="navbar-brand" href="#">
        <img src="https://cdn2.bigcommerce.com/server4900/364bb/product_images/usa_movie_store.gif" width="200" height="60" alt="">
      </img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
      <div className={"collapse navbar-collapse"} id={"navbarResponsive"}>
          <ul className ={"navbar-nav ml-auto"} >
          <li className ={"nav-item"}>
          <Link to="/">Home</Link>
          </li>
          <li className={"nav-item"}>
          <Link to="/movies">Movies</Link>
          </li>
          <li className={"nav-item"}>
          <Link to="/customers">Customers</Link>
          </li>
          <li className={"nav-item"}>
          <Link to="/search">Search</Link>
          </li>
          <li className={"nav-item"}>
          <Link to="/overdue">Overdue</Link>
          </li>
          </ul>
          <button
          onClick ={this.checkOutRental}
          type="button">Check Out New Rental</button>
          <button
          onClick ={this.checkInRental}
          type="button">Check In Movie</button>
      </div>
      </div>
      </nav>
      </header>
      <section className ={"sticky"}>
      <h4>{this.state.errorMessage !== "" ? this.state.errorMessage: "" }</h4>
      <div>Selected Customer: {this.state.selectedCustomer === "none" ? this.state.selectedCustomer
      : this.state.selectedCustomer.name}</div>
      <div>Selected Movie: {this.state.selectedMovie === "none" ? this.state.selectedMovie : this.state.selectedMovie.title}</div>
      </section>
      <section className={"main-content"}>

      <Route exact path="/" component={Home} />

      <Route path="/movies" render={(props) => <MovieListShow {...props} findMovieProp={this.findMovie} />}/>
      <Route path="/customers" render={(props) => <CustomerListShow {...props} findCustomerProp={this.findCustomer} />}/>
      <Route path="/search" render={(props) => <SearchShow {...props} resetStateProp={this.resetState} />}/>
      <Route path="/overdue" render={(props) => <OverdueShow {...props} returnedMovieProp={this.state.returnedMovie} findMovieProp={this.findMovie} findCustomerProp={this.findCustomer} />}/>
      </section>
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
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
      <h2 className={"overdue-heading"}>Overdue Movies</h2>
      <MovieList
      selectCustomerCallback={props.findCustomerProp} selectMovieCallback={props.findMovieProp}

      URL={"http://localhost:3000/rentals/overdue"}
      movie={props.returnedMovieProp ? props.returnedMovieProp : "none"}/>
      </div>
    );
  }

  function SearchShow(props) {
    return (
      <div>
      <Search resetStateProp={props.resetStateProp}/>
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
