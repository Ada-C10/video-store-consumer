import React, { Component } from 'react';
import './App.css';
import CustomersCollection from './components/CustomersCollection.js';
import RentalLibrary from './components/RentalLibrary.js';
import SearchBar from './components/SearchBar.js';
import AlertMessage from './components/AlertMessage.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import axios from 'axios';



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedMovie: {},
      selectedCustomer: {},
      alertMessage: '',
    }
  }


  handleSelectCustomer = (name, id) => {
    this.setState({
      selectedCustomer: {
        name,
        id,
      }
    })
  }



  handleSelectMovie = (id, title, imageUrl) => {
    this.setState({ //make custom object
      selectedMovie: {
        id, //equal to id: id
        title,
        imageUrl,
      }
    });
  }




  checkOut = () => {
    const due_date = new Date();
    due_date.setDate(due_date.getDate() + 7 );
    const checkoutUrl = `http://localhost:3000/rentals/${this.state.selectedMovie.title}/check-out`;
    const params = {
      due_date: due_date,
      customer_id: this.state.selectedCustomer.id,
    };


  axios.post(checkoutUrl, params)
    .then((response) => {
      console.log("API response success!", response);
      this.setState({
        alertMessage: response.data.message,
      })
    })
    .catch((error) => {
      console.log("Logging out error message in 'App checkout axios.post' ",error.message);
    });
  };




  render() {
    return (


      <Router>

      <div className="App">

        <h1 className="store-name">Ada Movie Rental</h1>

        <ul className="nav justify-content-center nav-justified">
          <ButtonToolbar>
            <li className="nav-item"><Button bsStyle="info"><Link to={'/customers'}>Customers</Link></Button></li>
            <li className="nav-item"><Button bsStyle="info"><Link to={'/library'}>Rental Library</Link></Button></li>
            <li className="nav-item"><Button bsStyle="info"><Link to={'/search'}>Search</Link></Button></li>
            <li className="nav-item"><Button bsStyle="info" onClick={this.checkOut}>Check Out </Button></li>

         </ButtonToolbar>
        </ul>

        <AlertMessage message={this.state.alertMessage} />

        <div className="card bg-light" >
          <h2 className="card-text ">{this.state.selectedCustomer.name}</h2>
          <img className="card-img-top" src={this.state.selectedMovie.imageUrl} alt={this.state.selectedMovie.title}/>
          <div className="card-body">
        </div>

        <section >
          <Route path="/search" component={ SearchBar }/>
        </section>
      </div>


      <section>
        <Route
          path="/customers"
          render={() => <CustomersCollection onSelectCustomer={this.handleSelectCustomer} />}
        />
      </section>

      <section>
        <Route
          path="/library"
          render={() => <RentalLibrary onSelectMovie={this.handleSelectMovie} />}
        />
      </section>

      </div>

    </Router>
    );
  }
}
//checkout pass customer id as a parameter in the api post with id in the url axios can post for you?
//urlencode the movie's title use it as the path and send the cusomer id as the parameter



export default App;
