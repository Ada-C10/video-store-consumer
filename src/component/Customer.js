import React from 'react';
import "./Customer.css"
import PropTypes from 'prop-types';


const Customer = (props) => {

    return (
      <div className="table-top">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Customer Name</th>
              <th scope="col">Movies Check-Out</th>
              <th scope="col">Rent A Movie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.name}</td>
              <td>{props.movies_checked_out_count}</td>
              <td><button className="button" type="button" onClick={props.callback}>{props.button}</button></td>
            </tr>
          </tbody>
        </table>
    </div>
    )
  }

  Customer.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    movies_checked_out_count: PropTypes.number,
    account_credit: PropTypes.number,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal_code: PropTypes.string,
    phone: PropTypes.string,
    callback: PropTypes.func,
    button: PropTypes.string
  }

export default Customer;
