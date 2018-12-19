import React from 'react';
import PropTypes from 'prop-types';
// import './Movie.css';


const Movie = (props) => {
  // console.log(props)


  return (
      <div>
        <h3>{props.title}</h3>
        <img src={props.image_url} alt={`${props.title}`} />
        <button onClick={props.selectMovieCallback}>Select for Rental</button>
      </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string,
  image_url: PropTypes.string
};

export default Movie;
