import React from "react";
import axios from 'axios';
import Movie from './Movie';
import PropTypes from 'prop-types';
import './Library.css';

class Library extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          movies: [],
      }
  }

  componentDidMount(){
    const URL = "http://localhost:3000/movies"
      axios.get(URL)
      .then((response) => {
        const movies = response.data.map((info) => {
          return <Movie key={info.external_id} path="/library" {...info} getMovie={this.props.getMovie} setMessages={this.props.setMessages}/>
        })
        this.setState({
          movies,
        })
      })
      .catch((error) =>{
        this.props.setMessages(error.message);
      //   this.setState({
      //     errorMessage: error.message,
      // })
    })
  }


  render() {

      return (
          <section>
              <h2 className="library_title">Library</h2>
              {/* {this.state.errorMessage && <h3>{this.state.errorMessage}</h3>} */}
              <section className="movies_container">
                {this.state.movies}
              </section>
          </section>
      )
  }
}

Library.propTypes = {
  getMovie: PropTypes.func.isRequired,
  setMessages: PropTypes.func.isRequired,
};

export default Library;
