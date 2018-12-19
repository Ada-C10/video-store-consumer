import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Library from './components/Library';
import CurrentRental from './components/CurrentRental';
import MovieSearch from './components/MovieSearch';
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
               <li><Link to='/'><h1>Video Store</h1></Link></li>
               <li><Link to='/library/'><img className="icon" src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1099153/580/386/m2/fpnw/wm0/film-reel-flat-icon-01-.jpg?1458399596&s=7dd4c457821c806e74d4bccc42bb53b4" /><p>Library</p></Link></li>
               <li><Link to='/customers/'><img className="icon" src="https://www.freeiconspng.com/uploads/customers-icon-5.png" /><p>Customers</p></Link></li>
               <li><CurrentRental
                      movie={this.state.movie}
                      customer={this.state.customer}
                      addRentalCallback={this.checkOutRental} /></li>
              <li><Link to='/search/'>Search Movie</Link></li>
             </ul>
           </nav>

           <Route path='/library/' render={() =>
             <Library movies={this.state.movieList} rentMovieCallback={this.selectMovie} />} />
           <Route path='/search/' render={() =>
             <MovieSearch />} />
         </div>
       </Router>
       <div>

       </div>
     </div>
   );
 }
}

export default App;
