import React, { Component } from 'react';
import './App.css';
import CustomersCollection from './components/CustomersCollection.js';
import RentalLibrary from './components/RentalLibrary.js';
import SearchBar from './components/SearchBar.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';



//const Customers1 = () => <h2>customers</h2>;



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedMovie: {},
      selectedCustomer: {},
    }
  }

  handleSelectCustomer = (name) => {
    this.setState({
      selectedCustomer: {
        name,
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

  render() {
    return (


      <Router>

      <div className="App">

      <ul class="nav justify-content-center nav-justified">
        <ButtonToolbar>
          <li class="nav-item"><Button bsStyle="info"><Link to={'/customers'}>Customers</Link></Button></li>
          <li class="nav-item"><Button bsStyle="info"><Link to={'/library'}>Rental Library</Link></Button></li>
          <li class="nav-item"><Button bsStyle="info"><Link to={'/search'}>Search</Link></Button></li>
       </ButtonToolbar>
      </ul>

      <div className="card" >
        <img className="card-img-top" src={this.state.selectedMovie.imageUrl} alt={this.state.selectedMovie.title}/>
        <div class="card-body">
          <h2 class="card-text"> {this.state.selectedMovie.title}</h2>
          <h2 class="card-text">{this.state.selectedCustomer.name}</h2>
      </div>

      </div>


      <section className="search-bar">
        <Route path="/search" component={ SearchBar }/>
      </section>


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
