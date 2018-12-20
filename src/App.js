import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Library from './components/Library';
import CustomerList from './components/CustomerList';
import CurrentRental from './components/CurrentRental';
import MovieSearch from './components/MovieSearch';
import axios from 'axios';

import './App.css';

const URL='http://localhost:3000';

class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
     queryList: [],
     movieList: [],
     customerList: [],
     movie: 'none',
     customer: 'none',
     message: '',
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
       this.setState({
         movieList: movies,
         message: `Successfully loaded ${movies.length} movies from the rental library`
       })
     })
     .catch((error) => {
       console.log(error.message);
       this.setState({
         message: error.message,
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
        this.setState({
          customerList: customers,
          message: `Loaded ${customers.length} customers successfully`
        })
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          message: error.message,
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

 getDueDate = () => {
   let dueDate = new Date(Date.now() + 12096e5);
   console.log(dueDate);
   const dd = dueDate.getDate();
   const mm = dueDate.getMonth()+1;
   const yyyy = dueDate.getFullYear();

   return dueDate = yyyy + '-' + mm + '-' + dd;
 }

 checkOutRental = () => {
    const apiPostInfo = {
      customer_id: this.state.customer.id,
      due_date: this.getDueDate(),
    };
    const customer = this.state.customer.name;
    const movie = this.state.movie.title;

    axios.post(`${URL}/rentals/${this.state.movie.title}/check-out`, apiPostInfo)
      .then( (response) => {
        const myNewRental = response.data;
        console.log("myNewRental", myNewRental);
        console.log(response);
      })
      .catch( (error) => {
        this.setState({
          message: `Failure ${error.message}`,
        });
      });
    this.setState({
      message: `${customer} checked out ${movie}`,
      movie: 'none',
      customer: 'none',
    })
  }

 //retrieves the data react app --> rails api -->external api
 //using the rails APi to query the external API
 //result from axios.get -> [resultListAxiosget]
 listResults = (query) => {
   axios.get(URL + `/movies?query=${query}`)

   .then((response) => {
     console.log(response)
     const searchResults = response.data.map((result) => {
       console.log(result)
       const newResult = {
         ...result,
         imageURL:result.image_url,
         title: result.title,
         releaseDate: result.release_date,
         overview: result.overview ? result.overview: "",
       }
       return newResult
     })
     this.setState ({
       queryList: searchResults,
       message: `Found ${searchResults.length} results for ${query}`

     });
     console.log(this.state);

   })
   .catch((error) => {
     console.log(error.message);
     console.log("ERROR")
     this.setState({
       message: error.message,
     });

   });
 }

 addToLibrary = (externalId) => {
   console.log('adding to library');
   const selectedMovie = this.state.queryList.find((movie) => {
     return movie.external_id === externalId;
   });

   const image_url = selectedMovie.image_url.slice(31);
   const movieData = {...selectedMovie, image_url: image_url}
   console.log(movieData);

   axios.post(`${URL}/movies`, movieData)
   .then( (response) => {
     console.log(response)
     console.log("success")

     const movieList = this.state.movieList;
     movieList.push(selectedMovie);

     const messageAlert = `${selectedMovie.title} is added to the library`
     this.setState({
       movieList: movieList,
       message: messageAlert,

     })
   })
   .catch( (error) => {
     console.log(error)
     this.setState({
       message: error.message
     })
   })
 }

 render() {
   return (
     <div className='App'><Router><div>
       <nav>
         <Link to='/'>
           <div className="st">
             <div className="st-top">
               <div className="st-bound st-bound-full"></div>
                 <p><span className="st-drop st-stranger-s">V</span>
                    <span className="st-stranger-t">i</span>
                    <span className="st-stranger-t">d</span>
                    <span className="st-stranger-t">e</span>
                    <span className="st-drop st-stranger-r-2">o</span>
                 </p>
                 <div className="st-bound st-bound-mini st-bound-left"></div>
                 <div className="st-bound st-bound-mini st-bound-right"></div>
                </div>
                <div className="st-bottom">
                  <p><span className="st-things-t">S</span>
                     <span className="st-things-n">t</span>
                     <span className="st-things-n">o</span>
                     <span className="st-things-n">r</span>
                     <span className="st-things-s">e</span>
                  </p>
                </div>
              </div>
            </Link>
             <ul className="navbar">
               <li><Link to='/library/'><button className="btn app-button">Library</button></Link></li>
               <li><Link to='/customers/'><button className="btn app-button">Customers</button></Link></li>
               <li><Link to='/search/'>Search Movie</Link></li>
               <li><CurrentRental
                      movie={this.state.movie}
                      customer={this.state.customer}
                      addRentalCallback={this.checkOutRental} /></li>
             </ul>
           </nav>
           <div className="alert">
            <span className="closebtn"></span>
            <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
            {this.state.message}
           </div>
           <Route path='/library/' render={() =>
             <Library movies={this.state.movieList} rentMovieCallback={this.onSelectMovie} />} />
           <Route path='/customers/' render={() =>
             <CustomerList customers={this.state.customerList} rentCustomerCallback={this.onSelectCustomer} /> } />
           <Route path='/search/' render={() =>
             <MovieSearch
                onSearchChangeCallback={this.listResults}
                queryList={this.state.queryList}
                addToLibraryCallback={this.addToLibrary} /> } />
         </div>
       </Router>
       <div>

       </div>
     </div>
   );
 }
}

export default App;
