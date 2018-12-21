import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import "./Library.css";

const Library = props => {
  if (props.movies.length > 0) {
    let movie = props.movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          image={movie.image_url}
          addMovieNameCallback={props.addMovieNameCallback}
        />
      );
    });
    return (
      <section>
        <div className="container library">{movie}</div>
      </section>
    );
  } else {
    return (
      <section>
        <div className="container library">Loading Movies</div>
      </section>
    );
  }
};

Library.propTypes = {
  addMovieNameCallback: PropTypes.func,
  image: PropTypes.string,
  overview: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  movies: PropTypes.array
};

export default Library;
