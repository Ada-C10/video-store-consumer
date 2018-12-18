import React from 'react';
import PropTypes from 'prop-types';


const Movies = (props) => {

    return (
      <div>
        <img src={props.image} alt={props.title}/>
        <h4><strong>{props.title}</strong></h4>
        <p>{props.overview}</p>
        <p>{props.releaseDate}</p>
    </div>
    )
  }

  Movies.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string,
    externalId: PropTypes.id
  }

export default Movies;
