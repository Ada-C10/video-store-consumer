import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import "./Item.css";

class SearchResult extends Component {
  render() {
    return (
      <div className="movie item">
        <img src={this.props.movie.image_url} alt="movie poster" />
        <div className="item__details">
          <h2>{this.props.movie.title}</h2>
          <p>{this.props.movie.release_date}</p>
        </div>
        <button
          onClick={() => {
            this.props.addToLibraryCallback(this.props.movie);
          }}
          className="item__button"
        >
          Add to Library
        </button>
      </div>
    );
  }
}

SearchResult.propTypes = {
  movie: PropTypes.object,
  addToLibraryCallback: PropTypes.func,
};

export default SearchResult;
