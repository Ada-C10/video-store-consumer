import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Library from './components/Library';
import CustomerList from './components/CustomerList';
import CurrentRental from './components/CurrentRental';
import axios from 'axios';

import './App.css';

const URL='http://localhost:3000/';

class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
     movieList: [],
     customerList: [],
     movie: 'none',
     customer: 'none',
   };
 }

 componentDidMount() {
   axios.get(`${URL}/movies`)
     .then((response) => {
       console.log(response);
       const movies = response.data.map((movie) => {
         const newMovie = {
           ...movie,
         }
         return newMovie;
       })
       this.setState({movieList: movies})
     })
     .catch((error) => {
       console.log(error.message);
       this.setState({
         errorMessage: error.message,
       })
     })

     axios.get(`${URL}/customers`)
      .then((response) => {
        console.log(response);
        const customers = response.data.map((customer) => {
          const newCustomer = {
            ...customer,
          }
          return newCustomer;
        })
        this.setState({customerList: customers})
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      })
 }

 onSelectMovie = (movieId) => {
   const selectedMovie = this.state.movieList.find((movie) => {
     return movie.id === movieId;
   });
   if (selectedMovie) {
     this.setState({movie: selectedMovie})
   }
 }

 onSelectCustomer = (customerId) => {
   const selectedCustomer = this.state.customerList.find((customer) => {
     return customer.id === customerId;
   });
   if (selectedCustomer) {
     this.setState({customer: selectedCustomer})
   }
 }

 checkOutRental = (newRental) => {
   console.log(newRental);
   axios.post(`${URL}/rentals/checkout`)
 }

 render() {
   return (
     <div className='App'>

       <Router>
         <div>
           <nav>
             <ul>
               <li><Link to='/'><h1 className="header">Video Store</h1></Link></li>
               <li><Link to='/library/'>Library</Link></li>
               <li><Link to='/customers/'>Customers</Link></li>
               <li><CurrentRental
                      movie={this.state.movie}
                      customer={this.state.customer}
                      addRentalCallback={this.checkOutRental} /></li>
             </ul>
           </nav>

           <Route path='/library/' render={() =>
             <Library movies={this.state.movieList} rentMovieCallback={this.onSelectMovie} /> } />
           <Route path='/customers/' render={() =>
             <CustomerList customers={this.state.customerList} rentCustomerCallback={this.onSelectCustomer} /> } />
         </div>
       </Router>
       <div>

       </div>
     </div>
   );
 }
}

export default App;
