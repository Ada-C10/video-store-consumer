import React from 'react';

import './Customer.css';
import profpic from '../assets/profpic.png'

const Customer = (props) => {
  return (
    <div className="customer">
      <div className="customer__art">
        <img src={profpic} className="profpic" />
      </div>
      <div className="customer__info">
        <h3 className="customer__name">
          { props.data.name }
        </h3>
        <p className="customer__movies">
          { props.data.movies_checked_out_count } AMVs checked out
        </p>
      </div>
      <button className="customer__select" onClick={ props.selectCB }>
        <p className="customer__select-link">
          select me!
        </p>
      </button>
    </div>
  )
}

export default Customer
