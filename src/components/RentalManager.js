import React, {Component} from 'react';
import AppRouter from './Router';
import axios from 'axios';
import RentalSelection from './RentalSelection';

class RentalManager extends Component  {

  constructor(props) {
    super(props)

    this.state = {
      currentCustomerID: "",
      currentMovieTitle: "",
    }
  }

  checkOut = () => {
    const date = new Date(Date.now());
    date.setDate(date.getDate() + 7);

    const url = "http://localhost:3000/rentals/" + `${this.state.currentMovieTitle}` + "/check-out?customer_id=" + `${this.state.currentCustomerID}` + "&due_date=" + `${date}` ;
    console.log(url);
    axios.post(url)
      .then((response) => {
        // success message to status bar
        })

      .catch((error) => {
        const errorMessage = error.message;
        this.setState({errorMessage});
      });
  }

  render() {
    return (
      <div>
        <RentalSelection checkOutCallback={this.checkOut}/>
        <AppRouter  />
      </div>

    )
  }
}

  RentalManager.propTypes = {


  };

  export default RentalManager;
