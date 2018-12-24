import React from 'react';
import './Movies.css'
import PropTypes from 'prop-types';


const Movies = (props) => {

    return (

        <div className="card">
          <img className="card-img-top" src={props.image} alt={props.title}/>
          <div className="card-body">
            <button className="button" type="button" onClick={props.callback}>{props.button}</button>
            <p>{props.releaseDate}</p>
            <h5 className="card-title">{props.title} </h5>
            <p className="card-text">{props.overview}</p>
          </div>
        </div>
    )
  }

  Movies.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string,
    select: PropTypes.string,
    button: PropTypes.string,
    callback: PropTypes.func
  }

export default Movies;
