import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const Movie = props => {
  const { id, overview, image, title } = props;

  return (
    <div className="card d-inline-block">
      <h3 className="text-center">{title}</h3>
      <div className="text-center">
        <img src={image} alt={`${title}`} className="mx-auto movie-image" />
      </div>
      <p className="text-center">{overview}</p>
      <div className="text-center">
        <button
          className="btn btn-info"
          onClick={() => {
            props.addMovieNameCallback(title, id);
          }}
        >
          Add to Rental
        </button>
      </div>
    </div>
  );
};

Movie.propTypes = {
  image: PropTypes.string,
  overview: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  addMovieNameCallback: PropTypes.func
};

export default Movie;
