import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

const Movie = (props) => {
  const { id, title, overview, release_date, inventory, image_url, external_id } = props;
  return (
    <div>
      <img src={image_url} alt={title} />
      <p> {title} </p>
      <p> {overview} </p>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  inventory: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  external_id: PropTypes.number,
}

export default Movie;
