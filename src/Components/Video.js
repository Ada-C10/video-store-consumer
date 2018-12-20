import React from 'react';
import propTypes from 'prop-types';
import './Video.css'

class Video extends React.Component {
  constructor(props) {
    super(props);

  }

  addToRentClickHander = (event) => {
    this.props.addToRentClickHander(this.props);
  }

  addMovieToCollection = () => {
    this.props.callback(this.props);
  }



  changeButton = () => {
    if (this.props.search === false) {
      return <button className="movie-button"
        onClick={ this.addToRentClickHander}>
        Select for Rental
      </button>
    }
    else if (this.props.search === true) {
      return <button className="movie-button"
        onClick={ this.addMovieToCollection}>
        Add to Library
      </button>
    }
  }

  render () {
    return (
      <section>
        <div className="movie-item">
        <img className="video-img"src={this.props.image_url}/>
          <div className="movie-details">
            <h2>{this.props.title}</h2>
            <p>{this.props.release_date}</p>
            <p>{this.props.overview}</p>
          </div>
            {this.changeButton()}
        </div>
      </section>
    )
  }
}

Video.propTypes = {

}

export default Video;
