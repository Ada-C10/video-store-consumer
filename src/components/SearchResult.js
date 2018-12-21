import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchResult.css";
import axios from "axios";

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMessage: ""
    };
  }
  changeMessage = message => {
    this.setState({ alertMessage: message });
    setTimeout(() => this.setState({ alertMessage: "" }), 2500);
  };

  updateMoviesCallback = () => {
    this.props.updateMoviesCallback();
  };

  // const { title, releaseDate, overview, imageURL } = props
  onSearchResultSelect = () => {
    axios
      .post("https://videostore-hac.herokuapp.com/movies", this.props)
      // console.log(this.props)
      .then(response => {
        this.changeMessage(`${this.props.title} was added to the library`);
        this.updateMoviesCallback();
        console.log(response);
        console.log("request posted");
      })
      .catch(error => {
        console.log(error);
        this.changeMessage(error.message);
      });
  };
  render() {
    console.log(this.props);
    return (
      <div className="card movie-card">
        <h4 className="alertMessage text-center">{this.state.alertMessage}</h4>
        <section className="movie-card--header">
          <h4>{this.props.title}</h4>
          <img src={this.props.imageURL} />
        </section>
        <section className="movie-card--body">
          <div>
            {this.props.overview.length > 128
              ? `${this.props.overview.substring(0, 128)}...`
              : this.props.overview}
          </div>
          <button
            onClick={() => {
              this.onSearchResultSelect();
            }}
            className="btn btn-info"
          >
            Select
          </button>
        </section>
      </div>
    );
  }
}
SearchResult.propTypes = {
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  imageURL: PropTypes.string.isRequired,
  updateMoviesCallback: PropTypes.func
};

export default SearchResult;
