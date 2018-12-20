import React from 'react';
import './Movies.css'
import PropTypes from 'prop-types';


const Movies = (props) => {

    return (

        <div className="card">
          <img className="card-img-top" src={props.image} alt={props.title}/>
          <div className="card-body">
            <sub>{props.releaseDate}</sub>
            <h5 className="card-title">{props.title} </h5>
            <p className="card-text">{props.overview}</p>
            <button type="button" onClick={props.callback}>{props.button}</button>
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
    externalId: PropTypes.id,
    select: PropTypes.string,
    button: PropTypes.string,
    callback: PropTypes.func
  }

export default Movies;
