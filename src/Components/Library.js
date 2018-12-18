import React, { Component } from 'react';
import Movie from './Movie';
import './Library.css';
import axios from 'axios';

const movies = [
  {
    id: 1,
    title: "Psycho",
    overview: "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
    release_date: "1960-06-16",
    image_url: "https://image.tmdb.org/t/p/w185/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg",
    external_id: 539
  },
  {
    id: 2,
    title: "Jaws",
    overview: "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.",
    release_date: "1975-06-18",
    image_url: "https://image.tmdb.org/t/p/w185/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg",
    external_id: 578
  }
]

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: []
    };
  }

  componentDidMount() {
    // this.setState({
    //   library: movies
    // });
    // NOTE: change this address once api is deployed
    const VIDEO_STORE_API = "http://localhost:3000/" + 'movies';

    axios.get(VIDEO_STORE_API)
    .then((response) => {
      this.setState({
        library: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  render () {
    const rentalList = this.state.library.map((movie, i) => {
      return (
        <Movie
          key={i}
          {...movie}
          buttonFunc={() => this.props.selectMovieCallback(movie)}
          theme='Select for Rental'
          />
      )
    });

    return (
      <div >
        {rentalList}
      </div>
    );
  }
}

export default Library;
