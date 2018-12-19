import React from "react";
import PropTypes from "prop-types";
import "./SearchResult.css";
import axios from "axios";

const SearchResult = props => {
  const { title, releaseDate, overview, imageURL } = props;
  const onSearchResultSelect = () => {
    console.log(props);
    // TODO - Update state of movies with new movie in Video Store via callback
    // Build a movie component and pass it up callback
    axios
      .post("http://localhost:5000/movies", props)

      .then(response => {
        console.log(response);
        console.log("request posted");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="card movie-card">
      <section className="movie-card--header">
        <h4>{title}</h4>
        <img src={imageURL} />
      </section>
      <section className="movie-card--body">
        <div>
          {overview.length > 128
            ? `${overview.substring(0, 128)}...`
            : overview}
        </div>
        <button
          onClick={() => {
            onSearchResultSelect();
          }}
          className="btn btn-info"
        >
          Select
        </button>
      </section>
    </div>
  );
};
SearchResult.propTypes = {
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  imageURL: PropTypes.string.isRequired
};

export default SearchResult;
