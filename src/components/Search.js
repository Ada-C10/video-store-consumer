import React, { Component } from "react";
import SearchList from "./SearchList";
import SearchBar from "./SearchBar";
import axios from "axios";
import "./SearchBar.css";
import PropTypes from "prop-types";

const URL = "https://videostore-hac.herokuapp.com/movies?query=";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultList: [],
      alertMessage: ""
    };
  }
  onSearchChange = query => {
    if (query === "") {
      this.setState({
        alertMessage: "Please enter a movie"
      });
    } else {
      this.setState({
        alertMessage: this.state.alertMessage.replace(
          "Please enter a movie",
          ""
        )
      });
      this.listResults(query);
    }
  };

  listResults = query => {
    axios
      .get(URL + `${query}`)

      .then(response => {
        const resultList = response.data.map(result => {
          const newResult = {
            ...result,
            imageURL: result.image_url,
            title: result.title,
            releaseDate: result.release_date,
            overview: result.overview ? result.overview : ""
          };
          return newResult;
        });
        this.setState({
          resultList
        });
        if (this.state.resultList.length < 1) {
          this.setState({
            alertMessage: "No Results Found"
          });
        }
      })
      .catch(error => {
        this.setState({
          alertMessage: error.message
        });
      });
  };
  debugger;

  render() {
    return (
      <section>
        <SearchBar onSearchCallback={this.onSearchChange} />

        <h3>
          {this.state.resultList.length > 0 &&
            `Showing ${this.state.resultList.length} results`}
        </h3>
        <h4 className="alertMessage text-center">{this.state.alertMessage}</h4>
        <SearchList
          resultList={this.state.resultList}
          updateMoviesCallback={this.props.updateMoviesCallback}
        />
      </section>
    );
  }
}

Search.propTypes = {
  updateMoviesCallback: PropTypes.func
};

export default Search;
