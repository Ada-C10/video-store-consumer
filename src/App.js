import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Library from './components/Library';
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
 }

 selectMovie = (movieId, movieTitle) => {
   let currentMovie = movieTitle
   this.setState({movie: currentMovie})
 }

 checkOutRental = (newRental) => {
   console.log(newRental);
 }

 render() {
   return (
     <div className='App'>
       <Router>
         <div>
           <nav>
             <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/library/'>Library</Link></li>
               <li><CurrentRental movie={this.state.movie} customer={this.state.customer} addRentalCallback={this.checkOutRental} /></li>
             </ul>
           </nav>

           <Route path='/library/' render={() =>
             <Library movies={this.state.movieList} rentMovieCallback={this.selectMovie} /> } />
         </div>
       </Router>
       <div>

       </div>
     </div>
   );
 }
}

export default App;
