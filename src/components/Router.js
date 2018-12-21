import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from '../App';
import Customers from './Customers';
import Library from './Library';
import Search from './Search';
import axios from 'axios';
import "./Router.css";

class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieId: null,
      customerId: null,
      currentMovieTitle: "",
      currentCustomerName: "",
      msg: "",
      customers: []
    };
  }

  componentDidMount() {
    const URL = "https://the-katie-alice-vs-api.herokuapp.com/customers";
    axios
      .get(URL)
      .then(response => {
        const customers = response.data;
        this.setState({ customers });
      })
      .catch(error => {
        this.setMessages(error.message);
      });
  }

  getMovie = (id, title) => {
    this.setState({
      currentMovieTitle: title,
      movieId: id
    });
  };

  getCustomer = (id, customer) => {
    this.setState({
      currentCustomerName: customer,
      customerId: id
    });
  };

  setMessages = msg => {
    this.setState({
      msg
    });
    setTimeout(() => this.setState({ msg: "" }), 2500);
  };

  closeMessage = () => {
    this.setState({
      msg: "",
    })
  }

  rentMovie = () => {
    if (this.state.movieId && this.state.customerId) {
      let dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 7);
      const { currentMovieTitle, customerId, movieId } = this.state;
      const url = `https://the-katie-alice-vs-api.herokuapp.com/rentals/${currentMovieTitle}/check-out`;

      const rental = {
        movie_id: movieId,
        customer_id: customerId,
        due_date: dueDate
      };

      axios
        .post(url, rental)
        .then(() => {
          const customers = [...this.state.customers];
          let customer = customers.find(
            person => person.id === this.state.customerId
          );
          const customerIndex = customers.findIndex(
            person => person.id === this.state.customerId
          );
          customer.movies_checked_out_count += 1;
          customers[customerIndex] = customer;
          this.setState({
            movieId: null,
            customerId: null,
            currentMovieTitle: "",
            currentCustomerName: "",
            customers
          });
          this.setMessages("Successfully added rental");
        })
        .catch(error => {
          this.setMessages(error.message);
        });
    }
  };

  render() {
    const buttonClass =
      this.state.currentCustomerName && this.state.currentMovieTitle
        ? "buttonDisplay"
        : "buttonNonDisplay";
    return <BrowserRouter>
        <div>
          <nav className="flex-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li className="text">
                <p>Selected Movie:</p>
                {this.state.currentMovieTitle && <span className="current_style">
                    {this.state.currentMovieTitle}
                  </span>}
              </li>
              <li className="text">
                <p>Selected Customer:</p>
                {this.state.currentCustomerName && <span className="current_style">
                    {this.state.currentCustomerName}
                  </span>}
              </li>
              <li className="text">
                <button onClick={this.rentMovie} className={buttonClass}>
                  Check Out
                </button>
              </li>
            </ul>
          </nav>
          {this.state.msg &&
            <div className="errors_container">
              <h3>{this.state.msg}</h3>
              <button className="closeError"onClick={this.closeMessage}><strong>&#10007;</strong></button>
            </div>
          }
          <Route exact path="/" component={App} />
          <Route path="/search" render={() => <Search setMessages={this.setMessages} />} />
          <Route path="/library" render={() => <Library getMovie={this.getMovie} setMessages={this.setMessages} />} />
          <Route path="/customers" render={() => <Customers customers={this.state.customers} getCustomer={this.getCustomer} />} />
        </div>
      </BrowserRouter>;
  }
}


export default Router;
