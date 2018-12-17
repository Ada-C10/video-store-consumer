import React from 'react';
import PropTypes from 'prop-types';


const Movies = (props) => {

    return (
      <div>
        <p>{props.image}</p>
        <p>{props.title}</p>
        <p>{props.overview}</p>
        <p>{props.releaseDate}</p>
        <p>{props.externalId}</p>
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
