import React from 'react';
import PropTypes from 'prop-types';


const Movies = (props) => {

    return (
      <div>
        <img src={props.image} alt={props.title}/>
        <h4><strong>{props.title}</strong></h4>
        <p>{props.overview}</p>
        <p>{props.releaseDate}</p>
        <button type="button" onClick={props.callback}>{props.button}</button>
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
