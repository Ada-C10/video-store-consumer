// import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Library from './Library';
import { BrowserRouter as Router, Link } from 'react-router-dom';


// import './LibraryButton.css';

class LibraryLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          title: "Psycho",
          overview: "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel.",
          release_date: "1960-06-16",
          image_url:"https://image.tmdb.org/t/p/w185/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg"
        },
        {
          title: "Jaws",
          overview: "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.",
          release_date: "1975-06-18",
          image_url: "https://image.tmdb.org/t/p/w185/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg"
        },
        {
          title: "Movie3",
          overview: "Movie Overview",
          release_date: "1975-06-18",
          image_url: "https://image.tmdb.org/t/p/w185/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg"
        },
      ]
    }
  }

  displayLibrary = () => {
    console.log('clicked on button to display library')
  }

  render() {
    const { movies } = this.state
    console.log(movies)

    const allMovies = movies.map((movie) => {
      <div key={movie.id}>
        {movie.title}
      </div>
    })

    return (
      <div>

            <Library>
              {allMovies}
            </Library>
      </div>
    )
  }
}

LibraryLink.propTypes = {

};

export default LibraryLink;
